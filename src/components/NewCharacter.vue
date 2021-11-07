<template>
  <div class="flex flex-col items-center ">
    <div
      class="border-california-200 border-2 bg-guardsman-red-800 rounded-lg mb-3 mx-2 text-trinidad-500"
    >
      <component :is="getComponentForStep()"></component>
      {{ isNextEnabled() }}
      <div class="flex justify-between space-x-10 px-5 py-2">
        <button
          :class="getBackButtonClass()"
          :disabled="!isBackEnabled()"
          @click="step--"
        >
          Zurück
        </button>
        <button
          :class="getContinueButtonClass()"
          :disabled="!isNextEnabled()"
          @click="step++"
        >
          {{ getNextName() }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const buttonClasses =
  'bg-guardsman-red-900 text-sm hover:border-tahiti-gold-500 border-2 border-california-200 font-bold py-2 px-4 rounded  transition-opacity duration-1000 ease-in-out'
export default {
  data: function () {
    return {
      step: 0
    }
  },
  computed: {
    ...mapGetters(['getChar', 'getTotalAttributesCost'])
  },
  methods: {
    getNextName () {
      if (this.getChar.race === 'human' && this.step !== 6) {
        return 'Weiter'
      } else {
        return 'Speichern'
      }
    },
    getContinueButtonClass () {
      if (!this.isNextEnabled()) {
        return buttonClasses + ' disabled'
      }
      return buttonClasses + ' enabled'
    },
    getBackButtonClass () {
      if (!this.isBackEnabled()) {
        return buttonClasses + ' disabled'
      }
      return buttonClasses + ' enabled'
    },
    isBackEnabled () {
      return this.step > 0
    },
    isNextEnabled () {
      switch (this.step) {
        case 0:
          return this.getChar.gender
        case 1:
          return this.getChar.name
        case 3:
          return this.getChar.gender
        case 5:
          return this.getTotalAttributesCost === 80
        default:
          return true
      }
    },
    getComponentForStep () {
      switch (this.step) {
        case 0:
          return 'GenderSelection'
        case 1:
          return 'Name'
        case 2:
          return 'RaceSelection'
        case 3:
          return 'ClassSelection'
        case 4:
          return 'CharPortaits'
        case 5:
          return 'Attributes'
        case 6:
          return 'Attributes'
        default:
          return 'Attributes'
      }
    },
    ...mapActions(['createNewCharacter', 'saveCharacter', 'checkName'])
  }
}
</script>
<style scoped>
.disabled {
  opacity: 0.5;
}
.enabled {
  opacity: 1;
}
</style>
