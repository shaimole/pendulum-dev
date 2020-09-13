<template>
<div>
  <b-tabs pills content-class="mt-3" justified>
    <b-tab title="Basis-Werte" active>
      <SkillListing :skills="getSkills"/>
    </b-tab>
    <b-tab title="Angriffswerte" active>
      <SkillListing :skills="getAttackStats"/>
    </b-tab>
    <b-tab title="Verteidigungswerte" active>
      <SkillListing :skills="getDefenseStats"/>
    </b-tab>
    <b-tab title="Wirker-Werte" active>
      <SkillListing :skills="getCasterStats"/>
    </b-tab>
    <b-tab title="Schadenswerte" active>
      <SkillListing :skills="getDamageStats"/>
      hi
    </b-tab>
    <b-tab title="Aktionen">
      <p><Attributes/></p>
    </b-tab>
    <b-tab title="Bäume">
      <p>I'm the tab with the very, very long title</p>
    </b-tab>
  </b-tabs>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Fähigkeiten',
  computed: {
    ...mapGetters([
      'getDefenseStats',
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
