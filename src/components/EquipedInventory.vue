<template>
  <b-container fluid>
    <b-row  align-h="start">
      <b-col>
        <label>Waffe :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.weapon"/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Kleidung :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.cloathing"/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Rüstung :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.armor"/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Umhang :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.cloak"/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Rucksack :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.backpack"/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Schuhwerk :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.boots"/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Handschuhe :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.gloves"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(
      [
        'getChar'
      ]
    )
  }
}
</script>
