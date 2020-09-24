<template>
  <div>
    <div v-for="option in options" class="selection" :key="option.value" :id="option.value" :class="isSelected(option.value)" @click="setGender(option.value)"><font-awesome-icon :icon="option.icon" /></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getChar'
    ])
  },
  data () {
    return {
      options: [{ value: 'M', icon: 'mars' }, { value: 'F', icon: 'venus' }],
      gender: ''
    }
  },
  methods: {
    ...mapActions([
      'setCharValue'
    ]),
    setGender (gender) {
      this.gender = gender
      const key = 'gender'
      const value = this.gender
      this.setCharValue({ key, value })
    },
    isSelected (value) {
      if (value === this.gender) {
        return 'selected'
      }
    }
  }
}
</script>
<style scoped>
.selected{
  animation: fadein 1s;
  animation-fill-mode: forwards;
  opacity: 1;
}
.selection {
  border-style: solid;
  border-color: rgba(1,1,1,200);
  margin:1em;
  opacity: 0.3;
  display: inline-block;
  width:40%;
  height:10em;
  border-style: solid;
  border-color: #86C232;
  background-color: #61892F;
}
.svg-inline--fa {
  position:relative;
  top:25%;
  font-size: 5em;
}
@keyframes fadein {
  0% {
    opacity: 0.3;
  }
  100% {

    opacity: 1;
  }
}
</style>
