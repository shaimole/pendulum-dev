<template>
  <div class='x'>
    <div v-bind:style="style">{{ label }}</div>
  </div>
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
    point: function () {
      return this.valueToPoint(
        +100,
        1,
        this.$parent.stats.length
      )
    },
    style () {
      return {
        top: 4 + 1.3 * this.valueToPoint(100, this.index, this.amount).y + 'px',
        left: 10 + 1.3 * this.valueToPoint(100, this.index, this.amount).x + 'px',
        position: 'absolute'
      }
    }
  },
  methods: {
    valueToPoint (value, index, total) {
      var x = 0
      var y = -value * 0.8
      var angle = Math.PI * 2 / total * index
      var cos = Math.cos(angle)
      var sin = Math.sin(angle)
      var tx = x * cos - y * sin + 100
      var ty = x * sin + y * cos + 100
      return {
        x: tx,
        y: ty
      }
    }
  }
}
</script>
<style scoped>
.x {
  font-size: 10px;
}
</style>
