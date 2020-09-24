<template>
  <div>
    <b-form-input id="range-2"
    v-model="cVal"
    type="range"
    :min="min"
    :max="max"
    @change="setter({key: 'age', value: cVal})"
    step="1">{{ cVal }}</b-form-input>
  </div>
</template>

<script>
export default {
  props: {
    min: Number,
    max: Number,
    cVal: Number,
    setter: Function
  }
}
</script>
