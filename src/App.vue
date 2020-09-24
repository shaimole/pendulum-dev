<template>
  <div id="app">
     <b-card-group deck>
    <CharacterCard :isAdd="true"/>
    <CharacterCard v-for="character in getCharacters" :key="character.name"
    :character="character"
    />
  </b-card-group>
  <CharacterSheet/>
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

</style>
