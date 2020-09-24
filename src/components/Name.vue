<template>
  <div class="nameContainer">
    <b-form-input id="Name" v-model="name" type="text" :value="getChar.name" @keydown="setName()"></b-form-input>
    <b-button @click="getRandomName"><font-awesome-icon icon="dice" /></b-button>
    <b-button id="nameSettings"><b-icon-gear-fill></b-icon-gear-fill></b-button>
    <b-popover id="settings" target="nameSettings" triggers="click" placement="top">
    <template v-slot:title>Names Herkunft</template>
    <b-form-select value=celat  v-model="selected" :options="options"></b-form-select>
  </b-popover>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getChar'
    ])
  },
  data () {
    return {
      inputs: [
        { type: 'text', label: 'Titel' },
        { type: 'text', label: 'Name' },
        { type: 'text', label: 'Haus' }
      ],
      options: [
        { value: 'celat', text: 'Chechen (Latin)' },
        { value: 'us', text: 'Amerikanisch' },
        { value: 'ar', text: 'Arabisch' },
        { value: 'au', text: 'Australisch' },
        { value: 'br', text: 'Brazilanisch' },
        { value: 'ch', text: 'Chinesisch' },
        { value: 'zhtw', text: 'Chinesisch (Traditional)' },
        { value: 'hr', text: 'Kroatisch' },
        { value: 'cs', text: 'Tscheschisch' },
        { value: 'dk', text: 'Daenisch' },
        { value: 'nl', text: 'Hollandisch' },
        { value: 'en', text: 'Englisch' },
        { value: 'er', text: 'Eritaeisch' },
        { value: 'fi', text: 'Finnisch' },
        { value: 'gr', text: 'Franzoesisch' },
        { value: 'gl', text: 'Gruenland' },
        { value: 'sp', text: 'Spanisch' },
        { value: 'hobbit', text: 'Hobbit' },
        { value: 'hu', text: 'Ungarisch' },
        { value: 'ig', text: 'Igbo' },
        { value: 'it', text: 'Italaenisch' },
        { value: 'jpja', text: 'Japanisch' },
        { value: 'jp', text: 'Englisch Japanisch' },
        { value: 'tlh', text: 'Klingon' },
        { value: 'ninja', text: 'Ninja' },
        { value: 'no', text: 'Norwegisch' },
        { value: 'fa', text: 'Persisch' },
        { value: 'pl', text: 'Polisch' },
        { value: 'ru', text: 'Russisch' },
        { value: 'rucyr', text: 'Russisch (Cyrillic)' },
        { value: 'gd', text: 'Schottisch' },
        { value: 'sl', text: 'Slovenisch' },
        { value: 'sw', text: 'Schwedisch' },
        { value: 'th', text: 'Thai' },
        { value: 'vn', text: 'Viatnam' }
      ],
      selected: 'celat',
      name: ''
    }
  },
  methods: {
    getRandomName () {
      let gender = 'male'
      if (this.getChar.gender === 'F') {
        gender = 'female'
      }
      const url =
        'https://fakeid.now.sh/api/Gender/' + gender + '/NameSet/' + this.selected + '/Country/fi'
      fetch(url)
        .then((response) => response.json())
        .then((contents) => (
          this.handleResponse(contents)
        )
        )
        .catch(() =>
          console.log('Can’t access ' + url + ' response. Blocked by browser?')
        )
    },
    ...mapActions([
      'setCharValue'
    ]),
    setName () {
      const key = 'name'
      const value = this.name
      this.setCharValue({ key, value })
    },
    handleResponse (contents) {
      this.name = contents.data.Name.split(' ')[0]
      this.setName()
    }
  }
}
</script>
<style scoped>
.nameContainer {
  margin: 1em;
  padding: 1em;
}
.form-control {
  display: inline-block;
  width: 50%;
  background-color:#222629;
  color: white;
}
button {
  display: inline-block;
  margin-left: 0.3em;
}
#settings >>> .popover-header {
  color: black
}
</style>
