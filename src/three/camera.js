import * as THREE from 'three'

export default {
  near: 0.01,
  far: 100,
  posZ: 0,
  posY: 6,
  rotationOrder: 'YXZ',
  getThreeJSCamera () {
    const aspect = 1
    const threeCam = new THREE.PerspectiveCamera(
      this.fov,
      aspect,
      this.near,
      this.far
    )
    threeCam.position.z = 0
    threeCam.position.y = 6
    threeCam.rotation.order = 'YXZ'
    return threeCam
  }
}
