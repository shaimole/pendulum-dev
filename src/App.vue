<template>
  <div id="app">
    <button @click="exp = exp?  false : true">Export</button>
    <div v-if="exp" ><b-form-textarea
      id="textarea"
      v-model="getCharacters"
      rows="10"
      max-rows="30000"
      disabled
    ></b-form-textarea>

    </div>
    <button @click="imp = imp?  false : true">Import</button>
      <div v-if="imp" >
            <b-button @click="importCharacters()">Starte Import</b-button>

        <b-form-textarea
      id="textarea"
      v-model="impo"
      rows="10"
      max-rows="30000"
    ></b-form-textarea>
      </div>
     <b-card-group deck :hidden="false">
    <CharacterCard :isAdd="true"/>
    <CharacterCard v-for="character in getCharacters" :key="character.name"
    :character="character" v-on:togglecards="cards = cards ? false :true" v-on:toggleloading="loading = loading ? false : true"
    />
  </b-card-group>
  <CharacterSheet v-on:toggleloading="loading = loading ? false : true" v-on:togglecards="cards = cards ? false :true"/>
  <b-spinner id="loader" v-if="loading" class="m-5" label="Busy"></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Pendulum',
  data () {
    return {
      getActive: false,
      exp: false,
      imp: false,
      impo: '',
      loading: false,
      cards: true
    }
  },
  computed: {
    ...mapGetters([
      'getCharacters'
    ])
  },
  methods: {
    importCharacters () {
      const newChars = JSON.parse(this.impo)
      for (const index in newChars) {
        this.getCharacters.push(newChars[index])
      }
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&display=swap');
#app {
  font-family: 'IM Fell DW Pica', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #222629;
  position: absolute;
  width: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
}
button {
  background-color: #6B6E70;
}
.card-deck {
  margin-top: 30px;
  margin-right:0;
  margin-left:0;
}
.border-one {
  border-width: 25px 25px 25px 25px !important;
  -moz-border-image: url('~@/assets/Rahmen.png') 27 27 27 27 repeat repeat !important;
  -webkit-border-image: url('~@/assets/Rahmen.png') 27 27 27 27 repeat repeat !important;
  -o-border-image: url('~@/assets/Rahmen.png') 27 27 27 27 repeat repeat !important;
  border-image: url('~@/assets/Rahmen.png') 27 27 27 27 repeat repeat !important;
  border-style:solid;
  background-clip: unset !important;
}
#loader {
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto !important;
}

</style>
