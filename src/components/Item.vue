<template>
<div v-if="item">
    <div >
      <h5>{{item.name}} <font-awesome-icon :icon="iconMappings[item.slot].icon" /></h5>
      <p>{{ item.desc }} <font-awesome-icon v-b-toggle="item.name.replace(/\s+/g, '-').toLowerCase() + 'edit'" icon="cog" /></p>
    </div>
    <b-sidebar :id="item.name.replace(/\s+/g, '-').toLowerCase() + 'edit'" title="Gegenstand bearbeiten" bg-variant="dark"  text-variant="light" shadow>
        <div class="px-3 py-2">
            <EditItem :item="item" :inventory="inventory" :equipped="equipped"/>
    </div>
    </b-sidebar>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    item: Object,
    inventory: Object,
    equipped: Boolean
  },
  computed: {
    ...mapGetters([
      'getChar'
    ])
  },
  data () {
    return {
      iconMappings: {
        Waffe: {
          id: 'weapon',
          icon: 'khanda'
        },
        Kopfbedeckung: {
          id: 'hat',
          icon: 'pied-piper-hat'
        },
        Schild: {
          id: 'shield',
          icon: 'shield-alt'
        },
        Ruestung: {
          id: 'armor',
          icon: 'male'
        },
        Talisman: {
          id: 'talismans',
          icon: 'yin-yang'
        },
        Artefakt: {
          id: 'artifacts',
          icon: 'wolf-pack-battalion'
        },
        Schuhwerk: {
          id: 'feet',
          icon: 'shoe-prints'
        },
        Handschuhe: {
          id: 'gloves',
          icon: 'mitten'
        },
        Diverses: {
          id: 'miche',
          icon: 'suitcase'
        },
        Kleidung: {
          id: 'cloths',
          icon: 'tshirt'
        },
        Rucksack: {
          id: 'backpack',
          icon: 'hiking'
        },
        Passiv: {
          id: 'passives',
          icon: 'bacterium'
        }
      }
    }
  }
}
</script>
<style scoped>
svg {
  float:right;
}
.settings:hover {
  cursor: pointer;
}
button {
  float: right;
}
</style>
