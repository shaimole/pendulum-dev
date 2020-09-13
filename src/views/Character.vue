<template>
<div>
  <b-tabs content-class="mt-3" justified>
    <b-tab title="Allgemein" active>
      <div class="character">
      <b-container class="bv-example-row">
      <b-row align-h="start">
        <b-col cols="4"> <Names/></b-col>
        <b-col cols="4"> <Origin/></b-col>
        <b-col cols="4"> <Age/></b-col>
      </b-row>
      </b-container>
      </div>
    </b-tab>
    <b-tab title="Attribute"><p><Attributes/></p></b-tab>
    <b-tab title="Fähigkeiten"><p><Skills/></p></b-tab>
    <b-tab title="Kampfwerte"><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="Notizen"><p>I'm a disabled tab!</p></b-tab>
    <b-tab title="Dev"><Dev/></b-tab>
  </b-tabs>
</div>
</template>

<script>

export default {
  name: 'Character'
}
</script>
