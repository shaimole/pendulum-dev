<template>
  <div>
    <div id="container" class="w-96 h-96" @click="changeCam()"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import skyboxBack from '../assets/threejs/back.png'
import skyboxFront from '../assets/threejs/front.png'
import skyboxUp from '../assets/threejs/top.png'
import skyboxDown from '../assets/threejs/bottom.png'
import skyboxLeft from '../assets/threejs/left.png'
import skyboxRight from '../assets/threejs/right.png'
export default {
  name: 'THREETest',
  data () {
    return {
      camera: null,
      window: window,
      scene: null,
      renderer: null,
      mesh: null,
      root: {
        name: 'test',
        description: '',
        clicked: '',
        childrend: [
          {
            name: 'test',
            description: '',
            childrend: [
              {
                name: 'test',
                description: '',
                childrend: []
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    init: function () {
      const container = document.getElementById('container')

      this.camera = new THREE.PerspectiveCamera(
        70, // opening angle
        container.clientWidth / container.clientHeight, // aspect ratio
        0.01, // near
        100 // far
      )
      this.camera.position.z = 10
      this.camera.position.y = 5

      this.scene = new THREE.Scene()

      // const vertices = []
      // const nodePos = [0, 1.7, 0]
      // this.calcPos(this.root, nodePos)
      const positions = [
        new THREE.Vector3(0, 0, -8),
        new THREE.Vector3(0, 3, -8),
        new THREE.Vector3(0, 6, -8),
        new THREE.Vector3(4, 6, -8),
        new THREE.Vector3(-4, 6, -8),
        new THREE.Vector3(0, 9, -8),
        new THREE.Vector3(0, 12, -8)
      ]
      for (const index in positions) {
        this.addCube(positions[index])
      }
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

      const points = []
      points.push(new THREE.Vector3(0, 0, -8))
      points.push(new THREE.Vector3(0, 12, -8))

      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      const line = new THREE.Line(geometry, material)
      this.scene.add(line)

      const points2 = []
      points2.push(new THREE.Vector3(0, 3, -8))
      points2.push(new THREE.Vector3(4, 6, -8))

      const geometry2 = new THREE.BufferGeometry().setFromPoints(points2)

      const line2 = new THREE.Line(geometry2, material)

      this.scene.add(line2)

      const points3 = []
      points3.push(new THREE.Vector3(0, 3, -8))
      points3.push(new THREE.Vector3(-4, 6, -8))

      const geometry3 = new THREE.BufferGeometry().setFromPoints(points3)

      const line3 = new THREE.Line(geometry3, material)

      this.scene.add(line3)
      // const geometry = new THREE.BufferGeometry()
      // geometry.setAttribute(
      //   'position',
      //   new THREE.Float32BufferAttribute(vertices, 3)
      // )

      // const material = new THREE.PointsMaterial({ color: 0x888888 })
      // const points = new THREE.Points(geometry, material)
      // this.scene.add(points)
      // this.addCube()
      const loader = new THREE.CubeTextureLoader()
      const texture = loader.load(
        [
          skyboxLeft,
          skyboxRight,
          skyboxUp,
          skyboxDown,
          skyboxBack,
          skyboxFront
        ],
        null,
        null,
        error => console.log(error)
      )
      this.scene.background = texture
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },

    calcPos (node, pos) {
      for (const child in node.children) {
        this.calcPos(child, node.pos)
      }
      this.addNodeToScene(node)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.camera.rotateY(0.05)
      this.renderer.render(this.scene, this.camera)
    },
    changeCam () {
      this.camera.lookAt(0, 2, 5)
    },
    addCube (pos) {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(geometry, material)
      this.scene.add(this.mesh)
      this.mesh.position.copy(pos)
    }
  },
  mounted () {
    this.init()
    this.animate()
  },
  computed: {
    getCanvasSize () {
      return {
        height: 1000,
        width: 1000
      }
    }
  }
}
</script>
