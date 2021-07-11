import PickHelper from '../three/picker.js'

export default {
  pickPosition: { x: 0, y: 0 },
  pickHelper: new PickHelper(),
  nodes: null,
  container: null,
  camera: null,
  scene: null,
  amount: 0,
  rotation: 0,
  zMove: 0,
  movementX: 0,
  state: 0,
  states: {
    zoomedOut: 0,
    zoomingIn: 1,
    rotatingUp: 2,
    zoomedIn: 4,
    rotatingDown: 8,
    zoomingOut: 16,
    rotating: 32
  },
  currentRotation: 0,
  xRotation: 0,
  setPickPosition (event) {
    const rect = this.container.getBoundingClientRect()
    const pos = {
      x: ((event.clientX - rect.left) * rect.width) / rect.width,
      y: ((event.clientY - rect.top) * rect.height) / rect.height
    }
    this.pickPosition.x = (pos.x / rect.width) * 2 - 1
    this.pickPosition.y = (pos.y / rect.height) * -2 + 1 // note we flip Y
  },
  clearPickPosition () {
    // unlike the mouse which always has a position
    // if the user stops touching the screen we want
    // to stop picking. For now we just pick a value
    // unlikely to pick something
    this.pickPosition.x = -100000
    this.pickPosition.y = -100000
  },
  pick () {
    this.pickHelper.pick(this.pickPosition, this.camera, this.nodes)
  },
  getCanvasRelativePosition (event) {
    const rect = this.container.getBoundingClientRect()
    return {
      x: ((event.clientX - rect.left) * this.container.width) / rect.width,
      y: ((event.clientY - rect.top) * this.container.height) / rect.height
    }
  },
  updateCamera () {
    if (this.isZooming()) {
      this.moveCameraZ()
      return
    }
    if (this.isRotatingX()) {
      this.rotateCamera()
      return
    }
    if (this.isSpinning()) {
      this.spinCamera()
    }
  },
  isZooming () {
    return (
      this.state === this.states.zoomingIn ||
      this.state === this.states.zoomingOut
    )
  },
  isRotatingX () {
    return (
      this.state === this.states.rotatingDown ||
      this.state === this.states.rotatingUp
    )
  },
  isSpinning () {
    return this.state === this.states.rotating
  },
  init (container, camera, amount, scene, nodes) {
    this.container = container
    this.camera = camera
    this.amount = amount
    this.scene = scene
    this.nodes = nodes
    this.clearPickPosition()
    this.container.addEventListener(
      'touchmove',
      function (event) {
        event.preventDefault()
      },
      false
    )
    this.container.addEventListener('mousedown', e => {
      this.container.onmousemove = e => {
        this.onDragDefault(e)
      }
    })

    this.container.addEventListener('mouseup', e => {
      this.container.onmousemove = null
    })
    this.container.addEventListener('mousemove', e => this.setPickPosition(e))
    this.container.addEventListener('mouseout', e => this.clearPickPosition(e))
    this.container.addEventListener('mouseleave', e =>
      this.clearPickPosition(e)
    )

    this.container.addEventListener(
      'touchstart',
      event => {
        // prevent the window from scrolling
        event.preventDefault()
        this.setPickPosition(event.touches[0])
      },
      { passive: false }
    )

    this.container.addEventListener('touchmove', event => {
      this.setPickPosition(event.touches[0])
    })

    this.container.addEventListener('touchend', e => this.clearPickPosition(e))
  },
  onDragDefault ({ movementX }) {
    if (this.isSpinning() || this.state === this.states.zoomedIn) {
      return
    }
    this.state = this.states.rotating
    if (movementX > 0) {
      this.rotation = (Math.PI * 2) / this.amount
      return
    }
    if (movementX < 0) {
      this.rotation = -((Math.PI * 2) / this.amount)
    }
  },
  zoom (event) {
    if (this.isZooming()) {
      return
    }
    if (event.deltaY < 0) {
      this.zoomIn()
    } else {
      this.zoomOut()
    }
  },
  zoomOut () {
    if (this.state !== this.states.zoomedIn) {
      return
    }
    this.zMove = -this.amount * 2 + 5
    this.xRotation = -1
    this.state = this.states.rotatingDown
  },
  zoomIn () {
    if (this.state !== this.states.zoomedOut) {
      return
    }
    this.zMove = this.amount * 2 - 5
    this.xRotation = 1
    this.state = this.states.zoomingIn
  },
  rotateCamera () {
    const maxCameraRotation = 0.25
    let xRotationThisFrame = maxCameraRotation
    if (Math.abs(this.xRotation) < maxCameraRotation) {
      xRotationThisFrame = Math.abs(this.xRotation)
    }
    if (this.xRotation < 0) {
      xRotationThisFrame = -xRotationThisFrame
    }
    this.xRotation -= xRotationThisFrame
    if (this.xRotation === 0) {
      if (this.state === this.states.rotatingUp) {
        this.state = this.states.zoomedIn
      }
      if (this.state === this.states.rotatingDown) {
        this.state = this.states.zoomingOut
      }
    }
    this.camera.rotation.x += xRotationThisFrame
    this.camera.position.y -= xRotationThisFrame * 10
  },
  moveCameraZ () {
    if (this.zMove === 0) {
      return
    }
    const maxCameraZMove = 0.2 * this.amount
    let zMoveThisFrame = maxCameraZMove
    if (Math.abs(this.zMove) < maxCameraZMove) {
      zMoveThisFrame = Math.abs(this.zMove)
    }
    if (this.zMove < 0) {
      zMoveThisFrame = -zMoveThisFrame
    }
    this.zMove -= zMoveThisFrame
    if (this.zMove === 0) {
      if (this.state === this.states.zoomingIn) {
        this.state = this.states.rotatingUp
      }
      if (this.state === this.states.zoomingOut) {
        this.state = this.states.zoomedOut
      }
    }
    this.camera.translateZ(-zMoveThisFrame)
  },
  spinCamera () {
    const maxCameraHorizontalMove = 0.0125
    let roationThisFrame
    if (this.rotation > 0) {
      roationThisFrame = maxCameraHorizontalMove
      if (this.rotation < maxCameraHorizontalMove) {
        roationThisFrame = this.rotation
      }
      this.rotation -= roationThisFrame
      if (this.rotation === 0) {
        this.state = this.states.zoomedOut
      }

      this.camera.rotation.y += roationThisFrame
    } else if (this.rotation < 0) {
      roationThisFrame = -maxCameraHorizontalMove
      if (Math.abs(this.rotation) < maxCameraHorizontalMove) {
        roationThisFrame = this.rotation
      }
      this.rotation -= roationThisFrame
      if (this.rotation === 0) {
        this.state = this.states.zoomedOut
      }
      this.camera.rotation.y += roationThisFrame
    }
  }
}
