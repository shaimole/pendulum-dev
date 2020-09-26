<template>
<div>
  <div v-if="this.item">
  <div>
     <b-form-select class="mb-3">
      <b-form-select-option v-model="invTransIndex" v-for="(inv, index) in getChar.inventory" :key="index" :value="index">{{inv.name}}</b-form-select-option>
    </b-form-select>

    <button @click="move(invTransIndex)">    <h5> In inventar transferieren </h5> </button>
  </div>
    <button  v-if="!equipped" @click="equip()"> Ausruesten </button>
    </div>
<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
  </div>
  <input v-model="name" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
</div>
<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Beschreibung</span>
  </div>
  <input v-model="desc" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
</div>
<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Bedingung</span>
  </div>
  <input v-model="condition" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
</div>
<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Platzverbrauch</span>
  </div>
  <input v-model="size" type="number" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
</div>
  <div>
    <b-form-select v-model="slot" :options="options" ></b-form-select>
  </div>
    <b-form-checkbox v-model="active" name="check-button" switch>
     Modifikatoren aktiv
    </b-form-checkbox>
  <div v-for="(modGroup,index) in mods" :key="index">
  <p v-if="active" class="left" v-b-toggle="index" variant="primary">-{{index}}</p>
  <b-collapse :id="index" class="mt-2">
       <div v-for="(mod, index2) in modGroup" :key="index2">
        <p class="left margin" v-b-toggle="index2">-{{mod.label}}</p>
         <b-collapse  :id="index2" class="mt-2">
           <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">+</span>
            </div>
            <input v-model="mod.mod" type="number" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
          </div>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">+ %</span>
            </div>
            <input v-model="mod.multi" type="number" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
          </div>
        </b-collapse>
     </div>
  </b-collapse>
  </div>
  <button :disabled="!name || !slot" @click="submit()">Speichern</button>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      options: ['Waffe', 'Talisman', 'Artefakt', 'Schild', 'Ruestung', 'Schuhwerk', 'Kleidung', 'Handschuhe', 'Diverses', 'Passiv', 'Rucksack'],
      name: '',
      desc: '',
      slot: '',
      size: '',
      mods: [],
      active: true,
      condition: '',
      invTransIndex: 0
    }
  },
  computed: {
    ...mapGetters([
      'getItem',
      'getChar'
    ])
  },
  props: {
    item: Object, inventory: Object, equipped: Boolean
  },
  mounted () {
    if (this.item) {
      this.name = this.item.name
      this.desc = this.item.desc
      this.slot = this.item.slot
      this.size = this.item.size
      this.active = this.item.active
      this.condition = this.item.condition
      this.mods = { ...JSON.parse(JSON.stringify(this.getItem.modifiers)), ...this.item.modifiers }
    } else {
      this.mods = JSON.parse(JSON.stringify(this.getItem.modifiers))
    }
  },
  methods: {
    ...mapActions([
      'additem'
    ]),
    equip () {
      const oldItem = this.getChar.equipped[this.item.slot]
      this.getChar.equipped[this.item.slot] = this.item
      if (oldItem) {
        this.getChar.inventory[0].items.push(oldItem)
      }
      const itemIndex = this.inventory.items.indexOf(this.inventory.items.find(element => element.name === this.item.name))
      this.inventory.items.splice(itemIndex, 1)
    },
    delete () {
      const itemIndex = this.inventory.items.indexOf(this.inventory.items.find(element => element.name === this.item.name))
      this.inventory.items.splice(itemIndex, 1)
    },
    move (index) {
      this.getChar.inventory[index].items.push(this.item)
      if (this.equipped) {
        this.getChar.equipped[this.inventory] = null
      } else {
        const itemIndex = this.inventory.items.indexOf(this.inventory.items.find(element => element.name === this.item.name))
        this.inventory.items.splice(itemIndex, 1)
      }
    },
    submit () {
      this.reduceMods()
      if (this.item) {
        this.item.name = this.name
        this.item.desc = this.desc
        this.item.slot = this.slot
        this.item.size = this.size
        this.item.active = this.active
        this.item.condition = this.condition
        this.item.mods = this.mods
        if (this.equipped) {
          this.item.inventory = 'equipped'
        } else {
          this.item.inventory = this.inventory.name
        }
      } else {
        this.inventory.items.push(
          {
            name: this.name,
            desc: this.desc,
            size: this.size,
            slot: this.slot,
            modifiers: this.mods,
            active: this.active,
            condition: this.condition,
            inventory: this.inventory.name
          }
        )
      }
      this.reset()
    },
    reset () {
      this.name = ''
      this.desc = ''
      this.slot = ''
      this.size = ''
      this.mods = JSON.parse(JSON.stringify(this.getItem.modifiers))
      this.active = true
      this.condition = ''
    },
    reduceMods () {
      for (const index in this.mods) {
        for (const stat in this.mods[index]) {
          if (!(this.mods[index][stat].mod + this.mods[index][stat].multi)) {
            delete this.mods[index][stat]
          } else {
            this.mods[index][stat].mod = parseFloat(this.mods[index][stat].mod)
            this.mods[index][stat].multi = parseFloat(this.mods[index][stat].multi) / 100
          }
        }
        if (!Object.keys(this.mods[index]).length) {
          delete this.mods[index]
        }
      }
    }
  }
}
</script>
<style scoped>
.left {
  text-align: left;
}
.margin {
  margin-left: 2em;
}
</style>
