<template>
  <div class="flex flex-col min-h-screen max-h-screen">
    <div
      id="app"
      class="bg-black-pearl-500 h-full flex flex-col ov flex-grow border-one border-tahiti-gold-500 items-stretch justify-center"
    >
      <router-view class="mb-20"> </router-view>
    </div>
    <!-- create a navigation which sticks to the bottom of the viewport -->
    <nav
      class="fixed bottom-0 w-full bg-black-pearl-500 border-tahiti-gold-500 border-t-2 text-white px-10"
    >
      <div
        class="container mx-auto flex flex-row justify-between items-center py-2 px-4"
      >
        <a
          v-for="item of getAllFirstLevelRoutes()"
          :key="item.name"
          @click="navigateTo(item.path)"
        >
          <font-awesome-icon
            :class="getRouteClass(item.path)"
            :icon="item.faIcon"
          />
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pendulum',
  methods: {
    navigateTo (route) {
      if (this.isCurrentRoute(route)) {
        return
      }
      if (this.isRulesRoute(route)) {
        window.open('http://pendulumrpg.github.io/', '_blank')
        return
      }
      this.$router.push(route)
    },
    isRulesRoute (route) {
      return route === '/rules'
    },
    getRouteClass (route) {
      return this.isCurrentRoute(route) ? 'text-tahiti-gold-500' : 'text-white'
    },
    isCurrentRoute (route) {
      return this.$route.path.startsWith(route)
    },
    // get all routes with a single front-slash
    getAllFirstLevelRoutes () {
      return this.$router.options.routes.filter(route =>
        this.isBaseLevelRoute(route.path)
      )
    },
    isBaseLevelRoute (path) {
      return this.getAmountOfSlashes(path) === 2
    },
    getAmountOfSlashes (path) {
      return path.split('/').length
    }
  }
}
</script>
