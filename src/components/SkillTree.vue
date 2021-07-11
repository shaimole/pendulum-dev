<template>
  <div class="flex items-center justify-center">
    <div
      class="flex flex-col items-center justify-center p-2 relative border-gradiant"
    >
      <div
        id="container"
        class="md:h-160 md:w-160  w-72 h-72"
        @wheel="zoom($event)"
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
import controls from '../three/controls.js'
import Tree from '../three/tree.js'

const amountOfTrees = 30
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
      nodes: [],
      skills: [
        {
          name: 'Zerstörung',
          root: {
            name: 'Zerstörung 1',
            req: 1,
            children: [
              {
                name: 'Zerstörung 2',
                req: 3,
                children: [
                  {
                    name: 'Sidegrade 1',
                    req: 3,
                    children: []
                  },
                  {
                    name: 'Sidegrade 3',
                    req: 3,
                    children: []
                  },
                  {
                    name: 'Zerstörung 3',
                    req: 6,
                    children: [
                      {
                        name: 'Zerstörung 4',
                        req: 9,
                        children: [
                          {
                            name: 'Zerstörung 5',
                            req: 12,
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: 'Sidegrade 2',
                    req: 3,
                    children: []
                  }
                ]
              }
            ]
          }
        }
      ]
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
      this.addTreeFromSkill(this.skills[0])
      for (let i = 0; i !== amountOfTrees - 1; i++) {
        this.addTree(0, 0)
      }
    },
    initRenderer () {
      const container = document.getElementById('container')
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      // border
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
      this.controls = controls
      this.controls.init(
        document.getElementById('container'),
        this.camera,
        amountOfTrees,
        this.scene,
        this.nodes
      )
    },
    zoom (event) {
      controls.zoom(event)
    },
    addTreeFromSkill (skillTree) {
      const center = 0
      const distance = 0
      const tree = new Tree()
      tree.registerNode(skillTree.root, 0, 0, new THREE.Vector3(0, 0, 0))

      const group = tree.getGroup()
      this.nodes = tree.getSpheres()
      var textGeo = new THREE.TextGeometry(skillTree.name, {
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
      group.translateZ(-amountOfTrees * 2)
      this.currentRotation += (Math.PI * 2) / amountOfTrees
      this.scene.add(group)
    },
    addTree (center, distance) {
      const group = new THREE.Group()
      this.scene.add(group)
      const positions = [
        new THREE.Vector3(center, 0, distance),
        new THREE.Vector3(center, 3, distance),
        new THREE.Vector3(center, 6, distance),
        new THREE.Vector3(center + 4.0, 9, distance),
        new THREE.Vector3(center - 4.0, 9, distance),
        new THREE.Vector3(center, 9, distance),
        new THREE.Vector3(center, 12, distance)
      ]
      for (const index in positions) {
        const geometry = new THREE.SphereGeometry(0.25, 32, 32)
        const material = new THREE.MeshBasicMaterial({ color: 0xfcd097 })
        const sphere = new THREE.Mesh(geometry, material)
        group.add(sphere)
        sphere.position.copy(positions[index])
        this.nodes.push(sphere)
      }
      const material = new THREE.LineBasicMaterial({
        color: 0xfcd097
      })

      const points = []
      points.push(positions[0])
      points.push(positions[6])

      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      const line = new THREE.Line(geometry, material)
      group.add(line)

      const points2 = []
      points2.push(positions[2])
      points2.push(positions[3])

      const geometry2 = new THREE.BufferGeometry().setFromPoints(points2)

      const line2 = new THREE.Line(geometry2, material)

      group.add(line2)

      const points3 = []
      points3.push(positions[2])
      points3.push(positions[4])
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
      group.translateZ(-amountOfTrees * 2)
      this.currentRotation += (Math.PI * 2) / amountOfTrees
    },
    calcPos (node, pos) {
      for (const child in node.children) {
        this.calcPos(child, node.pos)
      }
      this.addNodeToScene(node)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      if (!this.isLoadingFinished) {
        return
      }
      this.controls.pick()
      this.controls.updateCamera()
      this.composer.render()
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
.border-gradiant {
  background: linear-gradient(to top, #f48c06, #ffd66e);
  border-radius: 1em;
}
</style>
