<template>
  <div class="border-one">
    <b-modal id="characterCreation"  size="lg"  content-class="ccContent border-one"  @hide="step = 0" centered hide-footer :hide-header="true">
    <div v-if="step === 0" class="fade">
      <GenderSelection/>
        <div :class="isNextEnabled">
          <b-button :class="isNextEnabled" block @click="step = 1">Weiter</b-button>
      </div>
    </div>
    <div v-if="step === 1" class="fade">
      <Name/>
      <div :class="isNextEnabled">
          <b-button :class="isNextEnabled" block @click="step = 2">Weiter</b-button>
      </div>
    </div>
    <div v-if="step === 2" class="fade">
      <div :class="isNextEnabled">
          <b-button :class="isNextEnabled" block @click="step = 3;">Weiter</b-button>
      </div>
      <RaceSelection/>
    </div>
      <div v-if="step === 3" class="fade">
      <div :class="isNextEnabled">
          <b-button :class="isNextEnabled" block @click="step = 4">Weiter</b-button>
      </div>
      <ClassSelection/>
    </div>
    <div v-if="step === 4" class="fade">
      <CharPortaits/>
      <div :class="isNextEnabled">
          <b-button :class="isNextEnabled" block @click="step = 5; saveCharacter()">Weiter</b-button>
      </div>
    </div>
    <div v-if="step === 5" class="fade">
      <Attributes/>
      <div :class="isNextEnabled">
        <b-button :class="isNextEnabled" block @click=" $emit('togglecards'); finalize($bvModal)" >{{ getNextName}}</b-button>
      </div>
    </div>
    <div v-if="step === 6" class="fade">
      <h1> Zusatzpunkte Mensch </h1>
      <Attributes noCreate :addAttrPoints="3"/>
      <div :class="isNextEnabled">
        <b-button :class="isNextEnabled" block @click=" $emit('togglecards'); finalize($bvModal)">{{ getNextName}}</b-button>
      </div>
    </div>
  </b-modal>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: function () {
    return {
      step: 0
    }
  },
  computed: {
    getNextName () {
      if (this.getChar.race === 'human' && this.step !== 6) {
        return 'Weiter'
      } else {
        return 'Speichern'
      }
    },
    ...mapGetters([
      'getChar',
      'getTotalAttributesCost'
    ]),
    isNextEnabled () {
      const classes = ['collapsed', 'trans']
      switch (this.step) {
        case 0:
          if (this.getChar.gender) {
            classes.shift()
          }
          break
        case 1:
          if (this.getChar.name) {
            classes.shift()
          }
          break
        case 3:
          if (this.getChar.gender) {
            classes.shift()
          }
          break
        case 5:
          if (this.getTotalAttributesCost === 80) {
            classes.shift()
          }
          break
        default:
          classes.shift()
          break
      }
      return classes
    }
  },
  methods: {
    ...mapActions([
      'createNewCharacter',
      'saveCharacter',
      'checkName'
    ]),
    finalize (modal) {
      if (this.getChar.race !== 'human' || this.step === 6) {
        modal.hide('characterCreation')
        this.step = 0
        this.saveCharacter()
      } else {
        this.step = 6
      }
    }
  }
}
</script>
<style>
#characterCreation {
  animation: 0 !important;
}
.modal-backdrop {
    opacity: 1 !important;
}
.ccContent {
    font-family: 'IM Fell DW Pica', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background-color:#222629 !important;
}

button {
  border-color: #86C232!important;
  background-color: #61892F!important;
}
div.trans {
  padding: 1em;
  max-height: 800px;
  transition: all 2s linear !important;
}
div.collapsed{
  max-height: 0px;
}
.btn-block.trans {
  transform:scaleX(1) !important;
  transition: all 0.3s linear !important;
}
.btn-block.collapsed{
  transform:scaleX(0) !important
}
.fade {
   animation: fadein 2s;
   animation-fill-mode: forwards;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
