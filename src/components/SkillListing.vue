<template>
  <b-container fluid>
    <b-row class="my-1" align-h="center">
      <b-col sm="6">
        <b-row class="my-1" v-for="skill in skills" :key="skill.label" align-h="start">
          <b-col sm="5">
            <label>{{skill.label}} :</label>
          </b-col>
          <b-col sm="1">
             <label>{{skill.value}}</label>
          </b-col>
        </b-row>
      </b-col>
        <b-col  sm="2">
          <!-- <Pentagon :stats="getSkills" :statModMulti="5" :style="{ margin: '40px 30px' }"/> -->
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: { skills: Array }
}
</script>
