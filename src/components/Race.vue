<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      @change="changeRace($event)"
      class="mb-3"
      value-field="id"
      text-field="name"
    ></b-form-select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      selected: 'human',
      options: {}
    }
  },
  mounted () {
    this.options = this.getRaces
  },
  computed: {
    ...mapGetters([
      'getRaces',
      'getCharAttributes',
      'getRace'
    ])
  },
  methods: {
    changeRace (event) {
      this.resetAttributes()
      this.changeAttributesForRace(event)
      this.setRace(event)
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
