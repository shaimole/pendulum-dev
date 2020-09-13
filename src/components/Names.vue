<template>
  <b-container fluid>
    <b-row class="my-1" v-for="input in inputs" :key="input.label">
      <b-col sm="3">
        <label :for="`type-${input.type}`">{{input.label}} :</label>
      </b-col>
      <b-col sm="6">
        <b-form-input :id="input.label" :type="input.type"></b-form-input>
      </b-col>
      <b-col sm="3">
        <b-button @click="getRandomName">rnd</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      inputs: [
        { type: 'text', label: 'Titel' },
        { type: 'text', label: 'Name' },
        { type: 'text', label: 'Haus' }
      ]
    }
  },
  methods: {
    getRandomName () {
      const url = "https://fakeid.now.sh/api/Gender/random/NameSet/ninja/Country/fi"; 
      fetch(url) 
      .then(response => response.json())
      .then(contents => console.log(contents))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
  }
}
</script>
