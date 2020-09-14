<template>
  <div>
    <b-form-input id="Name" type="text" :value="randomName[0]"></b-form-input>
    <b-button @click="getRandomName"><b-icon-dice6></b-icon-dice6></b-button>
    <b-button id="nameSettings" @click="getRandomName"><b-icon-gear-fill></b-icon-gear-fill></b-button>
    <b-popover id="settings" target="nameSettings" triggers="click" placement="top">
    <template v-slot:title>Names Herkunft</template>
    <b-form-select value=celat  v-model="selected" :options="options"></b-form-select>
  </b-popover>
  </div>
</template>

<script>
export default {
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
      randomName: [],
      selected: 'celat'
    }
  },
  mounted () {
    this.getRandomName()
  },
  methods: {
    getRandomName () {
      const url =
        'https://fakeid.now.sh/api/Gender/random/NameSet/' + this.selected + '/Country/fi'
      fetch(url)
        .then((response) => response.json())
        .then((contents) => (this.randomName = contents.data.Name.split(' ')))
        .catch(() =>
          console.log('Can’t access ' + url + ' response. Blocked by browser?')
        )
    }
  }
}
</script>
<style scoped>
.form-control {
  float: left;
  width: 80%;
  background-color:rgb(160, 160, 160);
  color: white;
}
button {
  float: left;
  margin-left: 0.3em;
}
#settings >>> .popover-header {
  color: black
}
</style>
