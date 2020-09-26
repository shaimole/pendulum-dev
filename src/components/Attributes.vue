<template>
<div>
      <button v-if="isLevelUp" block id="levelUpA" :disabled="addAttrPoints !== 0" @click="handleLevelUps()">Stufenaufstieg</button>
  <b-container fluid>
<p>verbleibende Punkte: {{addAttrPoints ||  (0 > remainingPoints ? 0 : remainingPoints)}}</p>
      <b-row class="justify-content-md-center" v-for="input in getCurrentAttribs" :key="input.label" align-h="start" >
        <b-col sm="3">
          <label :for="`type-${input.type}`">{{input.label}} :</label>
        </b-col>
        <b-col sm="1">
          <label :for="`type-${input.type}`">{{input.value}}</label>
        </b-col>
        <b-col sm="2">
          <b-button squared
          :hidden="!isLoweringPossible(input.value, input.id)"
          @click="lowerAttribute(input.id, input.value - 1)">-</b-button>
          <b-button squared
          :hidden="!isIncrementPossible(input.id, input.value)"
          @click="increment(input.id, input.value + 1)">+</b-button>
        </b-col>
      </b-row>
      <Pentagon :stats="getAttributes" :statModMulti="5" :style="{ margin: '40px 30px' }"/>
      <Traits v-if="hideTraits !== true" :noCreate="noCreate"/>
  </b-container>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    noCreate: Boolean,
    addAttrPoints: Number,
    hideTraits: Boolean,
    isLevelUp: Boolean
  },
  data () {
    return {
      modAttribs: []

    }
  },
  computed: {
    ...mapGetters([
      'getAttributes',
      'getTotalAttributesCost',
      'getAttributeCosts',
      'getCharLevel',
      'getRace',
      'getRaces',
      'getChar'
    ]),
    remainingPoints () {
      return 80 - this.getTotalAttributesCost
    },
    getCurrentAttribs () {
      const attributes = this.getAttributes
      if (!this.noCreate) {
        return attributes
      }
      for (const attrib in attributes) {
        if (this.modAttribs[attrib]) {
          attributes[attrib] += this.modAttribs[attrib]
        }
      }
      return attributes
    }
  },
  methods: {
    handleLevelUps () {
      this.setCharValue({ key: 'level', value: this.getChar.level + this.getChar.levelUps })
      this.setCharValue({ key: 'levelUps', value: 0 })
    },
    changeAttribute (attribute, value) {
      this.setAttribute({ attribute, value })
    },
    increment (attribute, value) {
      if (!this.noCreate) {
        this.changeAttribute(attribute, value)
      } else {
        this.incrementAttribute(attribute, value)
      }
    },
    lowerAttribute (attribute, value) {
      if (!this.noCreate) {
        this.changeAttribute(attribute, value)
      } else {
        this.reduceAttribute(attribute, value)
      }
    },
    incrementAttribute (attribute, value) {
      if (!this.modAttribs[attribute]) {
        this.modAttribs[attribute] = true
      } else {
        this.modAttribs[attribute]++
      }
      this.changeAttribute(attribute, value)
      this.addAttrPoints--
    },
    reduceAttribute (attribute, value) {
      if (!this.modAttribs[attribute]) {
        return
      }
      this.changeAttribute(attribute, value)
      this.modAttribs[attribute]--
      this.addAttrPoints++
    },
    isIncrementPossible (attribute, value) {
      if (this.noCreate) {
        for (const attributeMod in this.modAttribs) {
          if (attributeMod !== attribute && this.modAttribs[attributeMod] > 1) {
            return false
          }
          if (attributeMod !== attribute && this.modAttribs[attributeMod] && this.modAttribs[attribute]) {
            return false
          }
        }
        return this.addAttrPoints > 0
      }
      let modifier = 1
      if (this.getRaces[this.getRace].attributes[attribute]) {
        modifier -= this.getRaces[this.getRace].attributes[attribute]
      }
      let step = value + modifier
      if (step > 20) {
        step = 20
      }
      if (step < 1) {
        step = 1
      }
      return value < 20 && (this.getTotalAttributesCost + this.getAttributeCosts[step].cost <= 80)
    },
    isLoweringPossible (value, name) {
      if (this.noCreate && this.modAttribs[name]) {
        return true
      } else if (!this.noCreate) {
        return value > 1
      }
      return false
    },
    ...mapActions([
      'setAttribute',
      'addUsedAttrPoint',
      'setCharValue'
    ])
  }
}
</script>
<style scoped>
button {
  margin-left: 2px;
}
#levelUpA {
  width:100%;
  background-color: yellow !important;
  border-radius: 0.25em;
  height: 2.5em;
}
</style>
