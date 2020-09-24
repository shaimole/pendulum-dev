<template>
  <div>
    <b-row>
      <b-col>
        <GeneralInformation/>
      </b-col>
      <b-col>
        <CharPortaits :slide="parseInt(this.getChar.image) - 1"/>
      </b-col>
    </b-row>
    <Lifebar/>
    <SecondaryLifebar/>
    <br>
    <Staminabar/>
    <Stressbar/>
    <br>
    <br>
    <Xpbar/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getChar'
    ])
  }
}
</script>
