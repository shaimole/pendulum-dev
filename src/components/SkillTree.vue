<template>
  <div>
    <img src="../assets/threejs/back.png" />
    <div id="container" class="w-96 h-96" @click="changeCam()"></div>
  </div>
</template>

<script>
import * as THREE from 'three'

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
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, 2, 0),
        new THREE.Vector3(0, 3, 0)
      ]
      for (const index in positions) {
        this.addCube(positions[index])
      }
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
      const texture = loader.setPath('../assets/threejs/').load(
        [
          'back.png',
          'back.png',
          'back.png',
          'back.png',
          'back.png',
          'back.png'
          // 'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg',
          // 'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg',
          // 'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg',
          // 'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg',
          // 'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg'
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
    addNodeToScene (node) {
      const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
      const material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(geometry, material)
      this.scene.add(this.mesh)
      for (const child in node.children) {
        this.addNodeToScene(child, node.pos)
      }
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
      const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
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
