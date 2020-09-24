  <template>
  <div class="pentagon-container">
    <svg height="200" width="200" preserveAspectRatio="xMidYMin">
      <polygon :points="totalPoints"></polygon>
      <polygon class="stats" :points="points"></polygon>
      <AxisLabel width="50" height="80" v-for="(stat, index) in stats" :key="stat.label" :index="index" :label="stat.id" :amount="stats.length" ></AxisLabel>
    </svg>
  </div>
</template>

<script>
export default {
  props: { stats: Array, statModMulti: Number },
  replace: true,
  computed: {
    points: function () {
      var total = this.stats.length
      var self = this
      return this.stats.map(function (stat, i) {
        var point = self.valueToPoint(stat.value * self.statModMulti || 1, i, total)
        return point.x + ',' + point.y
      }).join(' ')
    },
    totalPoints: function () {
      var total = this.stats.length
      var self = this
      return this.stats.map(function (stat, i) {
        var point = self.valueToPoint(100, i, total)
        return point.x + ',' + point.y
      }).join(' ')
    }
  },
  methods: {
    valueToPoint (value, index, total) {
      var x = 0
      var y = -value * 0.7
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
.pentagon-container {
  display: flex;
    justify-content: center;
margin: 1em;
}

polygon {
  display: block;
  margin: auto auto;
  fill: lightgrey;
  opacity: 1;
}
polygon.stats {
    fill: #86C232;
    opacity: 1;
}

circle {
    fill: transparent;
    stroke: #999;
}

label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}

#raw {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
