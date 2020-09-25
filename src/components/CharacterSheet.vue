<template>
    <b-modal modal-class="CC" id="characterSheet" size="xl"  content-class="border-one ccContent" centered hide-footer>
      <template v-slot:modal-header id="header">
        <b-row>
          <b-col sm="5">
            {{getChar.name}}

          </b-col>
          <b-col sm="1">
           <Conditions/>
          </b-col>
          <b-col sm= "2">
            {{getRaceName}}
          </b-col>
          <b-col sm="2">
            {{getClassName}}
          </b-col>
          <b-col sm="2">
            Level {{getChar.level}}
          </b-col>
        </b-row>
    </template>
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab title="Allgemein" active><CharacterFrontPage/></b-tab>
          <b-tab title="Inventar" ><InventoryGlobal/></b-tab>
          <b-tab title="Alle Werte"><Skills/></b-tab>
          <b-tab title="Attribute"><Attributes :noCreate="true"/></b-tab>
          <b-tab title="Aktionen" disabled><p>I'm a disabled tab!</p></b-tab>
          <b-tab title="Fähigkeiten"><SkillTree/></b-tab>
          <b-tab title="Notizen"><Notes/></b-tab>
        </b-tabs>
      </div>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getChar',
      'getClasses',
      'getRaces'
    ]),
    getClassName () {
      return this.getClasses.find(element => element.item === this.getChar.class).name
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
