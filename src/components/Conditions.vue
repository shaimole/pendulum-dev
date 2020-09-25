<template>
<div>
    <font-awesome-icon icon="cog" v-b-toggle.condi/>
    <b-sidebar id="condi" title="Bedingungen" bg-variant="dark"  text-variant="light" shadow>
        <div class="px-3 py-2">
           <b-list-group>
                <b-list-group-item v-for="(condition,index) in getAllConditions" :key="index">
                    {{condition.id}}
                <b-form-checkbox v-model="condition.active" name="check-button" switch>
                </b-form-checkbox>
                </b-list-group-item>
            </b-list-group>
        </div>
    </b-sidebar>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getAllConditions'
    ])
  }
}
</script>
<style scoped>
.list-group-item {
    background-color: inherit;
    text-align: left;
}
button {
    margin-right: 1em;
}
.badge {
    font-size: 100%;
    margin-left: 1em;
}
svg:hover {
    cursor: pointer;
}
</style>
