<template>
  <b-container fluid>
    <b-row  align-h="start">
      <b-col>
        <label>Waffe :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.Waffe" equipped/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Kleidung :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.Kleidung" equipped/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Rüstung :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.Ruestung" equipped/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Umhang :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.Umhang" equipped/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Schuhwerk :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.Schuhe" equipped/>
      </b-col>
    </b-row>
    <b-row  align-h="start">
      <b-col>
        <label>Handschuhe :</label>
      </b-col>
      <b-col>
          <Item :item="getChar.equipped.Handschuhe" equipped/>
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
