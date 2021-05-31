<template>
  <div
    class="bg-black-pearl flex-grow text-california-200 flex flex-col lg:flex-row justify-center lg:space-x-32 space-y-10 items-center"
  >
    <div class=" w-72 text text-california-600">
      <PendulumLogo />
    </div>
    <LoginForm />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      getActive: false,
      exp: false,
      imp: false,
      impo: '',
      loading: false,
      cards: true,
      logo: require('./assets/Pendulum-Logo.svg')
    }
  },
  computed: {
    ...mapGetters(['getCharacters'])
  }
}
</script>
