<template>
<div>
  <b-jumbotron :header="getCharName" lead="Bootstrap v4 Components for Vue.js 2">
    <p>For more information visit website</p>
    <b-button variant="primary" href="#">More Info</b-button>
  </b-jumbotron>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Fähigkeiten',
  computed: {
    ...mapGetters([
      'getCharName',
      'getSkills',
      'getAttackStats',
      'getSkills',
      'getDefenseStats',
      'getCasterStats',
      'getDamageStats',
      'getExternalStats',
      'getDefenseStats',
      'getHpStats',
      'getLimitStats'
    ])
  }
}
</script>
