<template>
<div>
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
    <span class="input-group-text" id="inputGroup-sizing-sm">Maximale Menge</span>
  </div>
  <input v-model="capacity" type="number" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
</div>
  <div>
    <b-form-select v-model="type" :options="options" ></b-form-select>
  </div>
  <button :disabled="!name || !type" @click="submit()">Speichern</button>
</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      options: ['Rucksack', 'Ort'],
      defaultInventory: {
        name: '',
        desc: '',
        capacity: 0,
        type: 'Ort',
        items: []
      },
      name: '',
      desc: '',
      capacity: '',
      type: ''
    }
  },
  props: {
    inventory: Object
  },
  methods: {
    ...mapActions([
      'addInventory'
    ]),
    getInventory () {
      return this.inventory || this.getNewInventory
    },
    submit () {
      this.addInventory({ name: this.name, desc: this.desc, capacity: this.capacity, type: this.type })
    }
  }
}
</script>
<style scoped>

</style>
