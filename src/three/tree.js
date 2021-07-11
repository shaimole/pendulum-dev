import * as THREE from 'three'
export default class Tree {
  constructor () {
    this.nodes = []
    this.group = new THREE.Group()
    this.spheres = []
  }

  getNodes () {
    return this.nodes
  }

  getSpheres () {
    return this.spheres
  }

  getGroup () {
    console.log(this.group)
    return this.group
  }

  registerNode (node, depth, offset, parentPos) {
    const flatNodeInfo = { ...node }
    flatNodeInfo.children = null
    const threeNode = { data: flatNodeInfo }
    threeNode.position = new THREE.Vector3(offset, depth, 0)

    this.nodes.push(threeNode)

    const geometry = new THREE.SphereGeometry(0.25, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0xfcd097 })
    const sphere = new THREE.Mesh(geometry, material)
    this.group.add(sphere)
    sphere.position.copy(threeNode.position)
    this.spheres.push(sphere)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xfcd097
    })
    console.log(threeNode.position, parentPos)
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      threeNode.position,
      parentPos
    ])

    const line = new THREE.Line(lineGeometry, lineMaterial)
    this.group.add(line)

    if (node.children.length > 1) {
      offset += -4
    }
    for (const childNode in node.children) {
      this.registerNode(
        node.children[childNode],
        depth + 3,
        offset,
        threeNode.position
      )
      offset +=
        8 / (node.children.length - 1 > 0 ? node.children.length - 1 : 1)
    }
  }
}
