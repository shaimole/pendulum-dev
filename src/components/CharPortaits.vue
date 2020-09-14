<template>
    <div>
        <b-carousel
        id="carousel-1"
        controls
        :interval="interval"
        img-width="110"
        img-height="170"
        style="text-shadow: 1px 1px 2px #333;"
        >
            <b-carousel-slide v-for="id in charImages" v-bind:key="id">
                <template v-slot:img>
                <img
                    class="d-block img-fluid"
                    width="110"
                    height="170"
                    :src="getImageUrl(id)"
                    alt="image slot"
                >
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      charImages: [],
      interval: 0
    }
  },
  mounted () {
    this.initalizePortaitIds(100)
  },
  methods: {
    getImageUrl (id) {
      return 'http://www.blackwyrmlair.net/~chevar/Portraits/JPG/M' + id + 'L.jpg'
    },
    initalizePortaitIds (N) {
      const ids = Array.apply(null, { length: N }).map(Number.call, Number)
      const reqLength = 4
      ids.shift()
      for (let i = 0; i < ids.length; i++) {
        var stringNumber = '' + ids[i]
        while (stringNumber.length < reqLength) {
          stringNumber = '0' + stringNumber
        }
        ids[i] = stringNumber
      }
      this.charImages = ids
    }
  }
}
</script>
<style scoped>
.carousel {
    max-width: 110px;
}
</style>
