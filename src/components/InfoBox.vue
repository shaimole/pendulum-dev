<template>
<div>
  <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
    <template v-slot:header> {{data.name}} </template>

    <template v-slot:lead>
      {{data.desc}}
    </template>

    <hr class="my-4">

    <b-container class="bv-example-row">
        <b-row v-for="pro in data.pro" :key="pro.title ? pro.title : pro.desc" class="pro">
            <b-col v-if="pro.title">{{pro.title}} </b-col>
            <b-col>{{pro.desc}}</b-col>
        </b-row>
    </b-container>
    <b-container class="bv-example-row">
        <b-row v-for="con in data.contra" :key="con.title ? con.title : con.desc" class="contra">
            <b-col v-if="con.title">{{con.title}} </b-col>
            <b-col>{{con.desc}}</b-col>
        </b-row>
    </b-container>

  </b-jumbotron>
</div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  methods: {}
}
</script>
<style scoped>
.col {
  padding:1em;
}
.bg-info {
    background-color: #474B4F !important;
}
.pro {
  color:#86C232;
}
.contra {
  color: red;
}
</style>
