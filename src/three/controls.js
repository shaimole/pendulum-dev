export default {
  container: null,
  camera: null,
  amount: 0,
  rotation: 0,
  zMove: 0,
  movementX: 0,
  currentRotation: 0,
  xRotation: 0,
  updateCamera () {
    if (this.zMove > 1) {
      this.moveCameraZ()
      return
    }
    if (this.xRotation !== 0) {
      this.rotateCamera()
      return
    }
    this.moveCameraZ()
    this.spinCamera()
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
    if (this.rotation) {
      return
    }
    if (movementX > 0) {
      this.rotation = (Math.PI * 2) / this.amount
      return
    }
    if (movementX < 0) {
      this.rotation = -((Math.PI * 2) / this.amount)
    }
  },
  zoom (event) {
    if (this.zMove !== 0) {
      return
    }
    if (event.deltaY < 0) {
      this.zMove = this.amount * 2 - 5
      this.xRotation = 1
    } else {
      this.zMove = -this.amount * 2 + 5
      this.xRotation = -1
    }
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
      this.camera.rotation.y += roationThisFrame
    } else if (this.rotation < 0) {
      roationThisFrame = -maxCameraHorizontalMove
      if (Math.abs(this.rotation) < maxCameraHorizontalMove) {
        roationThisFrame = this.rotation
      }
      this.rotation -= roationThisFrame
      this.camera.rotation.y += roationThisFrame
    }
  }
}
