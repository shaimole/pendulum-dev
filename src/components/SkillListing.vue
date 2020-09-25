<template>
  <b-container fluid>
    <b-row v-for="skill in skills" :key="skill.label" align-h="start">
      <b-col>
        <label>{{skill.label}} :</label>
      </b-col>
      <b-col>
          <label :id="skill.label" :class="skill.value >= skill.orgValue ? skill.value === skill.orgValue ? '' :'positive' : 'negative'">{{skill.value}} <font-awesome-icon v-if=" skill.mods && skill.mods.length" icon="info" /></label>
          <b-tooltip :target="skill.label" placement="right">
           <p> Basis: {{skill.orgValue}} </p>
            <div v-for="mod in skill.mods" :key="mod.name">
              <h1 v-if="mod.item"> {{mod.item}} </h1>
              <p v-if="mod.mod" :class="mod.mod > 0 ? 'positive' : 'negative'">+ {{mod.mod}} </p>
              <p v-if="mod.multi" :class="mod.multi > 0 ? 'positive' : 'negative'"> + {{mod.multi * 100}} %</p>
            </div>
          </b-tooltip>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: { skills: Array },
  methods: {
    getModParts (mods, skill) {
      for (const modItem in mods) {
        for (const mod in modItem[mods]) {
          console.log(mod)
        }
      }
    }
  }
}
</script>
<style scoped>
svg {
  margin-left: 1em;
}
svg:hover {
  cursor: pointer;
}
h1 {
  font-size: 1.3em;
}
.positive {
  color: #86C232;
}
.negative {
  color:red;
}
</style>
