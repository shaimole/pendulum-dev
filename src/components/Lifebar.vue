<template>
  <div>
    <b-row>
    <b-col cols="4">
    <h5>
    <font-awesome-icon icon="cog" @click=" displayOptions= displayOptions ? false : true "/>
    Trefferpunkte
    <div v-if="displayOptions">
    <button
    @click="setTp(getChar.currentTp -input)"
    >-</button>
    <button
     @click="setTp(getChar.currentTp + parseInt(input))"
    >+</button>
    <button
     @click="setTp(input)"
    >set</button>
    <input v-model="input" input="number">
    </div>
    </h5>
    </b-col>
    <b-col cols="8">
    <b-progress  :max="getHpStats[0].value" height="1rem" >
      <b-progress-bar :value="getChar.currentTp" :style="{backgroundColor: getColor(getChar.currentTp)}">
        <span><strong>{{ getChar.currentTp }} / {{ getHpStats[0].value }}</strong></span>
      </b-progress-bar>
    </b-progress>
    </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      input: 1,
      displayOptions: false
    }
  },
  computed: {
    ...mapGetters([
      'getChar',
      'getHpStats'
    ])
  },
  methods: {
    getColor: function (hp) {
      const max = this.getHpStats[0].value
      const percentage = hp / max
      const red = 255 - 255 * percentage
      const green = percentage * 255
      return 'rgb(' + red + ',' + green + ',0)'
    },
    setTp (newTp) {
      const key = 'currentTp'
      const value = newTp
      this.setCharValue({ key, value })
    },
    ...mapActions([
      'setCharValue'
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
    margin:0.9em;
  background-color: #474B4f;
}
input {
  background-color: #474B4f;
}
</style>
