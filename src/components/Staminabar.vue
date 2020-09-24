<template>
  <div>
    <b-row>
    <b-col cols="4">
    <h5>
    <font-awesome-icon icon="cog" @click=" displayOptions= displayOptions ? false : true "/>
    Energie
    <div v-if="displayOptions">
    <button
    @click="setTp(getChar.currentStam - input)"
    >-</button>
    <button
     @click="setTp(parseInt(getChar.currentStam) + parseInt(input))"
    >+</button>
    <button
     @click="setTp(input)"
    >set</button>
    <input v-model="input" input="number">
    </div>
    </h5>
    </b-col>
    <b-col cols="8">
    <b-progress  :max="getLimitStats[1].value" height="1rem" >
      <b-progress-bar :value="getChar.currentStam" :style="{backgroundColor: 'blue'}">
        <span><strong>{{ getChar.currentStam }} / {{ getLimitStats[1].value }}</strong></span>
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
      const key = 'currentStam'
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
