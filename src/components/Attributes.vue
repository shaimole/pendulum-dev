<template>
  <b-container fluid>
    <b-row class="my-1" align-h="center">
      <b-col sm="6">
        <b-row class="my-1" v-for="input in getAttributes" :key="input.label" align-h="start">
          <b-col sm="5">
            <label :for="`type-${input.type}`">{{input.label}} :</label>
          </b-col>
          <b-col sm="1">
             <label :for="`type-${input.type}`">{{input.value}}</label>
          </b-col>
          <b-col sm="3">
            <b-button squared
            :hidden="!isLoweringPossible(input.value)"
            @click="changeAttribute(input.id, input.value - 1)">-</b-button>
            <b-button squared
            :hidden="!isIncrementPossible(input.id, input.value)"
            @click="changeAttribute(input.id, input.value + 1)">+</b-button>
          </b-col>
        </b-row>
      </b-col>
        <b-col  sm="2">
          <Pentagon :stats="getAttributes" :statModMulti="5" :style="{ margin: '40px 30px' }"/>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getAttributes',
      'getTotalAttributesCost',
      'getAttributeCosts',
      'getCharLevel',
      'getRace',
      'getRaces'
    ]),
    remainingPoints () {
      return 80 - this.getTotalAttributesCost
    }
  },
  methods: {
    changeAttribute (attribute, value) {
      this.setAttribute({ attribute, value })
    },
    isIncrementPossible (attribute, value) {
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
    isLoweringPossible (value) {
      return this.getCharLevel === 1 && value > 1
    },
    ...mapActions([
      'setAttribute'
    ])
  }
}
</script>
<style scoped>
button {
  margin-left: 2px;
}
</style>
