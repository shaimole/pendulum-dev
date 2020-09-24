<template>
<p v-if="item">
    {{item.name}}
    </p>

</template>
<script>
export default {
  props: {
    item: Object
  }
}
</script>
<style scoped>

</style>
