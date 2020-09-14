<template>
  <div>
    <b-modal id="characterCreation"  size="lg"  content-class="ccContent"  centered hide-footer>
    <template v-slot:modal-title>
        <b-container fluid>
             <b-row class="mb-1">
                 <b-col cols="2">
                    <p style="margin-top: 0.2em;">Name : </p>
                </b-col>
                <b-col cols="10">
                    <Name/>
                </b-col>
            </b-row>
       </b-container>
    </template>
        <div v-if="step === 0">
      <b-container fluid>
        <b-row class="mb-1">
        <b-col>
            <CharPortaits/>
        </b-col>
        <b-col>
            <RaceSelection/>
            <ClassSelection/>
        </b-col>
        </b-row>
    </b-container>
    <b-button class="mt-3" block @click="step = 1">Weiter</b-button>
    </div>
    <div v-if="step === 1">
    <Attributes/>
    <b-button class="mt-3" block @click="$bvModal.hide('characterCreation'); step = 0; saveCharacter()">Speichern</b-button>
    </div>

  </b-modal>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: function () {
    return {
      interval: 0,
      step: 0
    }
  },
  mounted () {
    this.createNewCharacter()
  },
  methods: {
    ...mapActions([
      'createNewCharacter',
      'saveCharacter'
    ])
  }
}
</script>
<style>
.ccContent {
    font-family: 'IM Fell DW Pica', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background-color:rgb(171, 171, 171) !important
}
.modal-title {
    width: 100%
}
</style>
