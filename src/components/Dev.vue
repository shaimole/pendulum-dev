<template>
  <b-card-group deck>
    <CharacterCard :isAdd="true"/>
    <CharacterCard v-for="character in getCharacters" :key="character.name"
    :character="character"
    />
  </b-card-group>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dev',
  computed: {
    ...mapGetters([
      'getCharacters'
    ])
  }
}
</script>
