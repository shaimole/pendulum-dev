<template>
  <!-- card -->
  <div
    class="card w-20 border-california-200 border-2 bg-guardsman-red-800 rounded-lg mb-3 mx-2 text-trinidad-500"
  >
    <div class="relative" style="padding-top:100%">
      <img
        class="w-full h-full object-cover absolute top-0"
        :src="getCharacterImageUrl()"
        alt="character image"
      />
    </div>
    <h3 class="flex items-center justify-center font-semibold mb-2">
      <router-link :to="{ name: '/characters/', params: { id: character.id } }">
        {{ character.name }}
      </router-link>
    </h3>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: { character: Object },
  methods: {
    ...mapActions(['createNewCharacter', 'setCurrentCharacter']),
    getCharacterImageUrl () {
      return (
        'http://www.blackwyrmlair.net/~chevar/Portraits/JPG/' +
        this.character.gender +
        this.character.image +
        'L.jpg'
      )
    }
  }
  //   async openCCreations ($bvModal) {
  //     this.createNewCharacter()
  //     $bvModal.show('characterCreation')
  //   },
  //   async openCSheet ($bvModal, character) {
  //     const self = this
  //     setTimeout(function () {
  //       self.setCurrentCharacter(character)
  //       setTimeout(function () {
  //         $bvModal.show('characterSheet')
  //       }, 500)
  //     }, 10)
  //   }
  // }
}
</script>
