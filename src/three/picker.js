import * as THREE from 'three'

export default class PickHelper {
  constructor () {
    this.raycaster = new THREE.Raycaster()
    this.pickedObject = null
    this.pickedObjectSavedColor = 0
  }

  pick (normalizedPosition, camera, objects) {
    // restore the color if there is a picked object
    if (this.pickedObject) {
      this.pickedObject.material.color.setHex(this.pickedObjectSavedColor)
      this.pickedObject = undefined
    }

    // cast a ray through the frustum
    this.raycaster.setFromCamera(normalizedPosition, camera)
    // get the list of objects the ray intersected
    const intersectedObjects = this.raycaster.intersectObjects(objects)
    if (intersectedObjects.length) {
      // pick the first object. It's the closest one
      if (intersectedObjects[0].object.type === 'Line') {
        return
      }
      this.pickedObject = intersectedObjects[0].object

      // save its color
      this.pickedObjectSavedColor = this.pickedObject.material.color.getHex()
      // set its emissive color to flashing red/yellow
      document.body.style.cursor = 'pointer'
      this.pickedObject.material.color.setHex(0xfaa333)
    } else {
      document.body.style.cursor = 'default'
    }
  }
}
