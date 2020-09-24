<template>
  <b-container fluid>
    <b-row class="my-1" v-for="input in inputs" :key="input.label">
      <b-col sm="1">
        <font-awesome-icon icon="cog" @click=" displayOptions= displayOptions ? false : true "/>
      </b-col>
      <b-col sm="4">
        <label :for="`type-${input.type}`">{{input.label}} : </label>
      </b-col>
      <b-col sm="3">
        {{ getChar.age }}
      </b-col>
      <b-col v-if="displayOptions" sm="4">
      <button
      @click="setAge(getChar.age - 1)"
      >-</button>
      <button
      @click="setAge(parseInt(getChar.age) + 1)"
      >+</button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getRace',
      'getChar'
    ])
  },
  data () {
    return {
      inputs: [
        { type: 'range', label: 'Alter' }
      ],
      displayOptions: false
    }
  },
  methods: {
    ...mapActions([
      'setCharValue'
    ]),
    setAge (newVal) {
      this.setCharValue({ key: 'age', value: newVal })
    }
  }
}
</script>
<style scoped>
svg:hover {
  cursor: pointer;
}
svg {
  margin-right:0.5em;
}
</style>
