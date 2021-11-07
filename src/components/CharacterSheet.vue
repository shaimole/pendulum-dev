<template>
  <b-modal
    lazy
    static
    modal-class="CC"
    id="characterSheet"
    size="xl"
    content-class="border-one ccContent"
    centered
    hide-footer
  >
    <template v-slot:modal-header id="header">
      <b-row>
        <b-col sm="5">
          {{ getChar.name }}
        </b-col>
        <b-col sm="1">
          <Conditions />
        </b-col>
      <b-col sm="2"> {{ getRaceName }} </b-col>
        <b-col sm="2">
          {{ getClassName }}
        </b-col>
        <b-col sm="2"> Level {{ getChar.level }} </b-col>
      </b-row>
    </template>
    <div>
      <b-tabs v-model="tabIndex" content-class="mt-3" justified>
        <b-tab title="Allgemein" active
          ><CharacterFrontPage v-if="tabIndex === 0"
        /></b-tab>
        <b-tab title="Inventar"><InventoryGlobal v-if="tabIndex === 1"/></b-tab>
        <b-tab title="Alle Werte"><Skills v-if="tabIndex === 2"/></b-tab>
        <b-tab title="Attribute"
          ><Attributes :noCreate="true" v-if="tabIndex === 3"
        /></b-tab>
        <b-tab title="Aktionen" disabled><p>I'm a disabled tab!</p></b-tab>
        <b-tab title="Fähigkeiten"><SkillTree v-if="tabIndex === 5"/></b-tab>
        <b-tab title="Notizen"><Notes v-if="tabIndex === 6"/></b-tab>
      </b-tabs>
    </div>
    <b-row>
      <b-col>
        <b-button
          block
          @click="
            $emit('togglecards')
            $bvModal.hide('characterSheet')
          "
          >X</b-button
        >
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  computed: {
    ...mapGetters(['getChar', 'getClasses', 'getRaces']),
    getClassName () {
      return this.getClasses.find(
        element => element.item === this.getChar.class
      ).name
    },
    getRaceName () {
      return this.getRaces[this.getChar.race].name
    }
  }
}
</script>
<style scoped>
#characterSheet___BV_modal_outer_ >>> .modal-header {
  display: block !important;
}
</style>
