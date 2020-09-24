<template>
  <div>
    <b-row>
    <b-col cols="4">
    <h5>
    <font-awesome-icon icon="cog" @click=" displayOptions= displayOptions ? false : true "/>
    Stress
    <div v-if="displayOptions">
    <button
    @click="setTp(getChar.currentStress - input)"
    >-</button>
    <button
     @click="setTp(parseInt(getChar.currentStress) + parseInt(input))"
    >+</button>
    <button
     @click="setTp(input)"
    >set</button>
    <input v-model="input" input="number">
    </div>
    </h5>
    </b-col>
    <b-col cols="8">
    <b-progress  :max="getLimitStats[2].value" height="1rem" >
      <b-progress-bar :value="getChar.currentStress" :style="{backgroundColor: 'black'}">
        <span><strong>{{ getChar.currentStress }} / {{ getLimitStats[2].value }}</strong></span>
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
      'getLimitStats'
    ])
  },
  methods: {
    setTp (newTp) {
      const key = 'currentStress'
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
</style>
