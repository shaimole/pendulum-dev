<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <div
        id="container"
        class="md:h-160 md:w-160  w-72 h-72 relative"
        @wheel="zoom($event)"
        @click="clickTest()"
      >
        <LoadingSpinner v-show="isLoadingFinished !== true" class="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'

import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import robotoRegular from '../assets/fonts/Roboto_Regular.json'
import * as THREE from 'three'
import camera from '../three/camera.js'
import skybox from '../three/skybox.js'

const amount = 30
export default {
  name: 'SkillTree',
  data () {
    return {
      camera: null,
      isLoadingFinished: false,
      currentRotation: 0,
      composer: null,
      zMove: 0,
      xRotation: 0,
      lines: [],
      window: window,
      scene: null,
      mousedown: false,
      font: null,
      renderer: null,
      mesh: null,
      newPosition: new THREE.Vector3()
    }
  },
  methods: {
    init: function () {
      this.initFont()
      this.initCamera()
      this.initScene()
      this.initSkybox()
      this.initContent()
      this.initRenderer()
      this.initControls()
    },
    initFont () {
      this.font = new THREE.FontLoader().parse(robotoRegular)
    },
    initCamera () {
      const container = document.getElementById('container')
      this.camera = camera.getThreeJSCamera(container)
    },

    initScene () {
      this.scene = new THREE.Scene(0)
    },
    initSkybox () {
      const loader = new THREE.CubeTextureLoader()
      const texture = loader.load(
        skybox.textures,
        () => {
          setTimeout(() => (this.isLoadingFinished = true), 500)
        },
        error => console.log(error)
      )

      this.scene.background = texture
    },
    initContent () {
      for (let i = 0; i !== amount; i++) {
        this.addTree(0, 0)
      }
    },
    initRenderer () {
      const container = document.getElementById('container')
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      const renderScene = new RenderPass(this.scene, this.camera)

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
      )
      bloomPass.threshold = 0.2
      bloomPass.strength = 1
      bloomPass.radius = 0.7

      this.composer = new EffectComposer(this.renderer)
      this.composer.addPass(renderScene)
      this.composer.addPass(bloomPass)
      container.appendChild(this.renderer.domElement)
    },
    initControls () {
      const container = document.getElementById('container')
      container.addEventListener('scroll', e => console.log('jo'))
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

    onDragDefault ({ movementX }) {
      if (this.rotation) {
        return
      }
      if (movementX > 0) {
        this.rotation = (Math.PI * 2) / amount
        return
      }
      if (movementX < 0) {
        this.rotation = -((Math.PI * 2) / amount)
      }
    },
    zoom (event) {
      if (this.zMove !== 0) {
        return
      }
      if (event.deltaY < 0) {
        this.zMove = amount * 2 - 5
        this.xRotation = 1
      } else {
        this.zMove = -amount * 2 + 5
        this.xRotation = -1
      }
    },
    createGeometry (radius) {
      const geometry = new THREE.BufferGeometry()
      const vertices = []

      const vertex = new THREE.Vector3()

      for (let i = 0; i < 666; i++) {
        vertex.x = Math.random() * 2 - 1
        vertex.y = Math.random() * 2 - 1
        vertex.z = Math.random() * 2 - 1
        vertex.normalize()
        vertex.multiplyScalar(radius)

        vertices.push(vertex.x, vertex.y, vertex.z)

        vertex.multiplyScalar(Math.random() * 0.09 + 1)

        vertices.push(vertex.x, vertex.y, vertex.z)
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      )

      return geometry
    },
    addTree (center, distance) {
      const group = new THREE.Group()
      this.scene.add(group)
      const positions = [
        new THREE.Vector3(center + Math.random(), 0, distance),
        new THREE.Vector3(center + Math.random(), 3, distance),
        new THREE.Vector3(center, 6, distance),
        new THREE.Vector3(center + 4.0, 6, distance),
        new THREE.Vector3(center - 4.0, 6, distance),
        new THREE.Vector3(center, 9 + Math.random(), distance),
        new THREE.Vector3(center, 12, distance)
      ]
      for (const index in positions) {
        for (const sphere of [
          { radius: 1, color: 0xffffff, opacity: 0.75, scale: 0.25 },
          { radius: 1.5, color: 0xfd6e73, opacity: 0.5, scale: 0.25 },
          { radius: 4, color: 0x986303, opacity: 0.25, scale: 0.1 }
        ]) {
          const line = new THREE.LineSegments(
            this.createGeometry(sphere.radius),
            new THREE.LineBasicMaterial({
              color: sphere.color,
              opacity: sphere.opacity
            })
          )
          line.scale.x = line.scale.y = line.scale.z = sphere.scale
          line.userData.originalScale = sphere.scale
          line.rotation.y = Math.random() * Math.PI
          line.updateMatrix()
          group.add(line)
          line.position.copy(positions[index])
          this.lines.push(line)
        }
      }
      const material = new THREE.LineBasicMaterial({ color: 0xcc081d })

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
      var textGeo = new THREE.TextGeometry('Herro', {
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
      group.rotation.y = this.currentRotation
      group.translateZ(-amount * 2)
      this.currentRotation += (Math.PI * 2) / amount
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
      for (const line of this.lines) {
        line.rotation.y += 0.01
      }
      if (!this.isLoadingFinished) {
        return
      }
      this.spinCamera()
      this.zoomCamera()
      this.composer.render()
      // this.renderer.render(this.scene, this.camera)
    },
    zoomCamera () {
      if (this.zMove > 0 || (this.zMove && !this.xRotation)) {
        this.moveCameraZ()
        return
      }
      if (this.xRotation !== 0) {
        console.log(this.camera)
        this.rotateCamera()
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
      const maxCameraZMove = 0.3 * amount
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
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>
<style scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
