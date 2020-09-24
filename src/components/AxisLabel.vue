<template>
<g :transform="transform">
    <text>{{ label }}</text>
</g>
</template>

<script>
export default {
  props: {
    index: Number,
    label: String,
    amount: Number
  },
  replace: true,
  computed: {
    transform () {
      return 'translate(' + this.valueToPoint().x + ',' + this.valueToPoint().y + ')'
    }
  },
  methods: {
    valueToPoint () {
      var x = 0
      var y = -120 * 0.7
      var angle = Math.PI * 2 / this.amount * this.index
      var cos = Math.cos(angle)
      var sin = Math.sin(angle)
      var tx = x * cos - y * sin + 89
      var ty = x * sin + y * cos + 105
      return {
        x: tx,
        y: ty
      }
    }
  }
}
</script>
<style scoped>
text {
  fill:white
}
</style>
