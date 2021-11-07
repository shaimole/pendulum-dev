<template>
  <div id="app">
    <!-- card grid -->
    <div class="flex flex-wrap p-2 items-center justify-between mt-2">
      <CharacterCard
        v-for="character in getCharacters"
        :key="character.name"
        :character="character"
        v-on:togglecards="cards = cards ? false : true"
        v-on:toggleloading="loading = loading ? false : true"
      />
      <AddCharacterCard v-for="index in 100" :key="index" />
    </div>
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
    ...mapGetters(['getCharacters'])
  },
  methods: {
    addMessage () {
      // const payload = {
      //   username: 'Jeff',
      //   subject: 'x',
      //   message: 'iuasf',
      //   imageURL: 'asfsaf'
      // }
      fetch('http://localhost:4000/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(result => {
          console.log(result)
        })
    },
    importCharacters () {
      const newChars = JSON.parse(this.impo)
      for (const index in newChars) {
        this.getCharacters.push(newChars[index])
      }
    }
  }
}
</script>
