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
    </b-tab>
    <b-tab title="Lebens- und Trefferpunkte" active>
      <SkillListing :skills="getHpStats"/>
    </b-tab>
    <b-tab title="Begrenzungen" active>
      <SkillListing :skills="getExternalStats"/>
    </b-tab>
    <b-tab title="Sonstiges" active>
      <SkillListing :skills="getLimitStats"/>
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
      'getCasterStats',
      'getDamageStats',
      'getHpStats',
      'getExternalStats',
      'getLimitStats'
    ])
  }
}
</script>
