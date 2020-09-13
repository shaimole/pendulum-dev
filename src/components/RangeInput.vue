<template>
  <div>
    <b-form-input id="range-2" v-model="value" type="range" :min="min" :max="max" step="1">{{ value }}</b-form-input>
    <div class="mt-2"> {{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    min: Number,
    max: Number
  },
  data () {
    return {
      value: '18'
    }
  }
}
</script>
