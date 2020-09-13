<template>
  <b-container fluid>
    <b-row class="my-1" v-for="input in inputs" :key="input.label">
      <b-col sm="3">
        <label :for="`type-${input.type}`">{{input.label}} :</label>
      </b-col>
      <b-col sm="9">
        <RangeInput
        :min="18"
        :max="70">
        </RangeInput>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      inputs: [
        { type: 'range', label: 'Alter' }
      ]
    }
  }
}
</script>
