<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'warrior',
      options: [
        { item: 'warrior', name: 'Krieger' },
        { item: 'priest', name: 'Priester' },
        { item: 'worker', name: 'Handwerker' },
        { item: 'rogue', name: 'Schurke' },
        { item: 'mage', name: 'Magier' }
      ]
    }
  }
}
</script>
