<template>
  <div id="app">
     <b-card-group deck>
    <CharacterCard :isAdd="true"/>
    <CharacterCard v-for="character in getCharacters" :key="character.name"
    :character="character"
    />
  </b-card-group>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Pendulum',
  data () {
    return {
      getActive: false
    }
  },
  computed: {
    ...mapGetters([
      'getCharacters'
    ])
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
  background-color: rgb(24, 24, 24);
  position: absolute;
  width: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
}
</style>
