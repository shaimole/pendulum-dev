<template>
  <div
    id="container"
    class="h-full w-full flex-1"
    @scroll="changeCam()"
    @click="clickTest()"
  ></div>
</template>

<script>
import * as THREE from 'three'
import skyboxBack from '../assets/skybox/back.png'
import skyboxFront from '../assets/skybox/front.png'
import skyboxUp from '../assets/skybox/top.png'
import skyboxDown from '../assets/skybox/bottom.png'
import skyboxLeft from '../assets/skybox/left.png'
import skyboxRight from '../assets/skybox/right.png'
import robotoRegular from '../assets/fonts/Roboto_Regular.json'
export default {
  name: 'THREETest',
  data () {
    return {
      camera: null,
      currentRotation: 0,
      window: window,
      scene: null,
      mousedown: false,
      time: 0,
      font: null,
      renderer: null,
      mesh: null,
      newPosition: new THREE.Vector3(),
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
    initCamera () {
      const container = document.getElementById('container')
      const fov = 75
      const aspect = container.clientWidth / container.clientHeight
      const near = 0.01
      const far = 100
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      this.camera.position.z = 0
      this.camera.position.y = 5
    },
    initFont () {
      const fontLoader = new THREE.FontLoader()
      this.font = fontLoader.parse(robotoRegular)
    },
    initScene () {
      this.scene = new THREE.Scene(0)
    },
    initSkybox () {
      const loader = new THREE.CubeTextureLoader()
      const texture = loader.load(
        [
          skyboxFront,
          skyboxBack,
          skyboxUp,
          skyboxDown,
          skyboxLeft,
          skyboxRight
        ],
        null,
        null,
        error => console.log(error)
      )

      this.scene.background = texture
    },
    initContent () {
      for (let i = 0; i !== 10; i++) {
        this.addTree(0, 0)
      }
    },
    initRenderer () {
      const container = document.getElementById('container')
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    initControls () {
      const container = document.getElementById('container')
      container.addEventListener(
        'touchmove',
        function (event) {
          event.preventDefault()
        },
        false
      )
      container.addEventListener('mousedown', e => {
        container.onmousemove = e => {
          this.onDragDefault(e)
        }
      })

      container.addEventListener('mouseup', e => {
        container.onmousemove = null
      })
    },
    init: function () {
      this.initFont()
      this.initCamera()
      this.initScene()
      this.initSkybox()
      this.initContent()
      this.initRenderer()
      this.initControls()
    },
    onDragDefault ({ movementX }) {
      if (movementX > 0) {
        this.rotation = (Math.PI * 2) / 10
        return
      }
      if (movementX < 0) {
        this.rotation = -((Math.PI * 2) / 10)
      }
    },
    addTree (center, distance) {
      const group = new THREE.Group()
      this.scene.add(group)
      const positions = [
        new THREE.Vector3(center, 0, distance),
        new THREE.Vector3(center, 3, distance),
        new THREE.Vector3(center, 6, distance),
        new THREE.Vector3(center + 4.0, 6, distance),
        new THREE.Vector3(center - 4.0, 6, distance),
        new THREE.Vector3(center, 9, distance),
        new THREE.Vector3(center, 12, distance)
      ]
      for (const index in positions) {
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshNormalMaterial()
        this.mesh = new THREE.Mesh(geometry, material)
        group.add(this.mesh)
        this.mesh.position.copy(positions[index])
      }
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

      const points = []
      points.push(new THREE.Vector3(center, 0, distance))
      points.push(new THREE.Vector3(center, 12, distance))

      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      const line = new THREE.Line(geometry, material)
      group.add(line)

      const points2 = []
      points2.push(new THREE.Vector3(center, 3, distance))
      points2.push(new THREE.Vector3(center + 4, 6, distance))

      const geometry2 = new THREE.BufferGeometry().setFromPoints(points2)

      const line2 = new THREE.Line(geometry2, material)

      group.add(line2)

      const points3 = []
      points3.push(new THREE.Vector3(center, 3, distance))
      points3.push(new THREE.Vector3(center - 4, 6, distance))

      const geometry3 = new THREE.BufferGeometry().setFromPoints(points3)

      const line3 = new THREE.Line(geometry3, material)

      group.add(line3)
      var textGeo = new THREE.TextGeometry('X', {
        font: this.font,
        size: 2,
        height: 1,
        curveSegments: 1,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
      })
      const text = new THREE.Mesh(
        textGeo,
        new THREE.LineBasicMaterial({ color: 0xffffff })
      )
      text.position.copy(new THREE.Vector3(center, -5, distance))
      text.geometry.center()
      group.add(text)
      group.rotation.y += this.currentRotation
      group.translateZ(-50)
      this.currentRotation += (Math.PI * 2) / 10
    },
    calcPos (node, pos) {
      for (const child in node.children) {
        this.calcPos(child, node.pos)
      }
      this.addNodeToScene(node)
    },
    clickTest () {
      var selectedObject
      var raycaster = new THREE.Raycaster()
      var mouse = new THREE.Vector2()
      raycaster.setFromCamera(mouse, this.camera)
      var intersects = raycaster.intersectObjects([], true)
      if (intersects.length > 0) {
        selectedObject = intersects[0]
        alert(selectedObject)
      }
    },
    animate: function () {
      requestAnimationFrame(this.animate)

      let roationThisFrame
      if (this.rotation > 0) {
        roationThisFrame = 0.01
        if (this.rotation < 0.01) {
          roationThisFrame = this.rotation
        }
        this.rotation -= roationThisFrame
        this.camera.rotation.y += roationThisFrame
      } else if (this.rotation < 0) {
        roationThisFrame = -0.01
        if (Math.abs(this.rotation) < 0.01) {
          roationThisFrame = this.rotation
        }
        this.rotation -= roationThisFrame
        this.camera.rotation.y += roationThisFrame
      }

      this.renderer.render(this.scene, this.camera)
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
