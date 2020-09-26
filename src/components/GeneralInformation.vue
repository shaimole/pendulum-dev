<template>
<div>
      <b-container fluid>
    <b-row >
        <b-col sm="1">
        </b-col>
      <b-col sm="4">
        <label :for="`type-text`">Name : </label>
      </b-col>
      <b-col sm="3">
        {{getChar.name}}
      </b-col>
    </b-row>
  </b-container>
    <Age/>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      displayOptions: false
    }
  },
  computed: {
    ...mapGetters([
      'getChar',
      'getClasses',
      'getRaces'
    ])
  },
  methods: {
  }
}
</script>
<style scoped>
svg :hover {
cursor: pointer;
}
svg {
    margin-right: 0.3em;
}
label {
    text-align: right;
}
</style>
