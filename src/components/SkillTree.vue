<template>
  <div id="container" class="w-96 h-96" @click="changeCam()"></div>
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
      this.camera.position.z = 20

      this.scene = new THREE.Scene()

      const vertices = []

      for (let i = 0; i < 10000; i++) {
        // const x = THREE.MathUtils.randFloatSpread(2000)
        // const y = THREE.MathUtils.randFloatSpread(2000)
        // const z = THREE.MathUtils.randFloatSpread(2000)

        vertices.push(0, 0, 0)
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      )

      const material = new THREE.PointsMaterial({ color: 0x888888 })
      const points = new THREE.Points(geometry, material)
      this.scene.add(points)
      // this.addCube()

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    },
    changeCam () {
      this.camera.position.x += 0.01
    },
    addCube () {
      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      const material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(geometry, material)
      this.scene.add(this.mesh)
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
