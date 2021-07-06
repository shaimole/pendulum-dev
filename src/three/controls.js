export default {
  container: null,
  camera: null,
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
  updateCamera () {
    console.log(this.state)
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
  init (container, camera, amount) {
    this.container = container
    this.camera = camera
    this.amount = amount
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
  },
  onDragDefault ({ movementX }) {
    console.log('tryspin')
    if (this.isSpinning() || this.state === this.states.zoomedIn) {
      return
    }
    this.state = this.states.rotating
    console.log('start spinning')
    if (movementX > 0) {
      this.rotation = (Math.PI * 2) / this.amount
      return
    }
    if (movementX < 0) {
      this.rotation = -((Math.PI * 2) / this.amount)
    }
  },
  zoom (event) {
    console.log('tryzoom')
    if (this.isZooming()) {
      return
    }
    console.log('guard 1')
    if (event.deltaY < 0) {
      console.log('in')

      this.zoomIn()
    } else {
      console.log('out')

      this.zoomOut()
    }
  },
  zoomOut () {
    if (this.state !== this.states.zoomedIn) {
      return
    }
    this.zMove = -this.amount * 2 + 5
    this.xRotation = -1
    this.state = this.states.zoomingOut
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
    const maxCameraHorizontalMove = 0.05
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
