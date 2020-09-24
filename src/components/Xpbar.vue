<template>
  <div>
    <b-row>
    <b-col cols="4">
    <h5>
    <font-awesome-icon icon="cog" @click=" displayOptions= displayOptions ? false : true "/>
    Erfahrung
    <div v-if="displayOptions">
    <button
    @click="setTp(getChar.currentXp - input)"
    >-</button>
    <button
     @click="setTp(parseInt(getChar.currentXp) + parseInt(input))"
    >+</button>
    <button
     @click="setTp(input)"
    >set</button>
    <input v-model="input" input="number">
    </div>
    </h5>
    </b-col>
    <b-col cols="8">
    <b-progress  :max="1000" height="1rem" :class="getClass">
      <b-progress-bar :value="getChar.currentXp"  :style="{backgroundColor: 'yellow'}">
        <span><strong>{{ getChar.currentXp + (getChar.level + getChar.levelUps -1) * 1000 }} / {{(getChar.level + getChar.levelUps) * 1000}}</strong></span>
      </b-progress-bar>
    </b-progress>
    </b-col>
    </b-row>
      <b-button id="levelUp" @click="handleLevelUps()" v-if="getChar.levelUps && !getAttributePoints"  block >Stufenaufstieg</b-button>
      <Attributes v-if="getAttributePoints" noCreate hideTraits isLevelUp :addAttrPoints="getAttributePoints"/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      input: 1,
      displayOptions: false,
      levelUp: false,
      points: 0
    }
  },
  computed: {
    ...mapGetters([
      'getChar',
      'getAttributePoints'
    ]),
    getClass () {
      if (this.levelUp) {
        return 'levelUp'
      }
      return ''
    }
  },
  methods: {
    setTp (newTp) {
      const key = 'currentXp'
      let value = newTp
      if (newTp >= 1000) {
        newTp -= 1000
        value = 1000
        const self = this
        this.setCharValue({ key, value })
        this.levelUp = true
        setTimeout(function () {
          self.addLevelUp()
          value = 0
          self.setCharValue({ key, value })
          self.levelUp = false
          setTimeout(function () {
            self.setTp(newTp)
          }, 500)
        }, 3000)
      } else {
        value = newTp
        this.setCharValue({ key, value })
      }
    },
    handleLevelUps () {
      if (!this.getAttributePoints) {
        this.setCharValue({ key: 'level', value: this.getChar.level + this.getChar.levelUps })
        this.setCharValue({ key: 'levelUps', value: 0 })
      }
    },
    ...mapActions([
      'setCharValue',
      'addLevelUp'
    ])
  }
}
</script>
<style scoped>
h5 {
  text-align: left;
  margin:0.3em;
}
button {
  margin:0.1em;
}
input{
  margin:0.1em;
}
strong {
  color:black;
}
svg:hover {
  cursor: pointer;
}
.progress {
  background-color: #474B4f;
  margin:0.9em;
}
input {
  background-color: #474B4f;
}
.levelUp {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}
#levelUp {
  background-color: yellow !important;
  color: black;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
