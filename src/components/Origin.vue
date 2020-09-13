<template>
  <b-container fluid>
    <b-row class="my-1" v-for="input in inputs" :key="input.label">
      <b-col sm="3">
        <label :for="`type-${input.type}`">{{input.label}} :</label>
      </b-col>
      <b-col sm="9">
        <b-form-input v-if="input.type === 'text'"  :id="input.label" :type="input.type"></b-form-input>
        <Class v-else-if="input.type === 'class'" />
        <Race v-else-if="input.type === 'race'" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      inputs: [
        { type: 'race', label: 'Rasse' },
        { type: 'text', label: 'Volk' },
        { type: 'class', label: 'Klasse' }
      ]
    }
  }
}
</script>
