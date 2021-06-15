<template>
  <div
    id="app"
    class="bg-black-pearl-500 h-full min-h-screen flex flex-col border-one border-tahiti-gold-500 items-stretch"
  >
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'Pendulum'
}
</script>
<style>
.border-one {
  border-width: 25px 25px 25px 25px !important;
  -moz-border-image: url('~@/assets/Rahmen.png') 27 27 27 27 repeat repeat !important;
  -webkit-border-image: url('~@/assets/Rahmen.png') 27 27 27 27 repeat repeat !important;
  -o-border-image: url('~@/assets/Rahmen.png') 27 27 27 27 repeat repeat !important;
  border-image: url('~@/assets/Rahmen.png') 27 27 27 27 repeat repeat !important;
  border-style: solid;
  background-clip: unset !important;
}
</style>
