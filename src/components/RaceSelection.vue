<template>
    <div>
        <b-carousel
        id="RaceSelection"
        controls
        background="rgb(171, 171, 171)"
        :interval="interval"
        >
            <b-carousel-slide v-for="option in options"
            v-bind:key="option.id"
            img-blank
            :caption="option.name"
            >
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      selected: 'human',
      options: {},
      interval: 0
    }
  },
  mounted () {
    this.options = this.getRaces
  },
  computed: {
    ...mapGetters([
      'getRaces',
      'getCharAttributes',
      'getRace'
    ])
  }
}
</script>
<style scoped>
.carousel {
    max-width: 100%;
    height: 40px;
}
.carousel >>> .carousel-inner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 40px;
    color: #fff;

}
.carousel >>>  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 310px;
    left: 15%;
    z-index: 10;
    padding-top: 0;
    padding-bottom: 0;
    color: white;
    text-align: center;
}
</style>
