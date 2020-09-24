<template>
    <div>
        <b-carousel
        id="RaceSelection"
        controls
        background="#222629"
        :interval="interval"
        @sliding-end="changeClass($event)"
        >
          <b-carousel-slide v-for="(option, index) in options"
          v-bind:key="option.id">
            <template v-slot:img>
              <InfoBox :data="options[index]"/>
            </template>
          </b-carousel-slide>
        </b-carousel>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      selected: 'human',
      options: {},
      interval: 0
    }
  },
  mounted () {
    this.options = this.getClasses
  },
  computed: {
    ...mapGetters([
      'getClasses'
    ])
  },
  methods: {
    changeRace (index) {
      const race = Object.keys(this.getRaces)[index]
      this.selected = race
      this.resetAttributes()
      this.changeAttributesForRace(race)
      this.setRace(race)
    },
    changeAttributesForRace (race) {
      const attributes = this.getRaces[race].attributes
      for (var i in attributes) {
        this.setAttribute(
          {
            attribute: i,
            value: 10 + attributes[i]
          }
        )
      }
    },
    ...mapActions([
      'setAttribute',
      'setRace',
      'resetAttributes'
    ])
  }
}
</script>
<style scoped>
</style>
