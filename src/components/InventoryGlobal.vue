<template>
<div>
    <EquipedInventory/>
    <b-list-group>
        <Inventory v-for="inventory in getChar.inventory" :key="inventory.name" :inventory="inventory"/>
        <b-list-group-item>
            <button v-b-toggle.newInventory>+</button> Neues Inventar erstellen
        </b-list-group-item>
    </b-list-group>
     <b-sidebar id="newInventory" title="Neues Inventar erstellen" bg-variant="dark"  text-variant="light" shadow>
        <div class="px-3 py-2">
            <EditInventory new />
        </div>
    </b-sidebar>
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
<style scoped>
button {
    margin-right: 1em;
}
nobr:hover {
  cursor: pointer;
}
svg:hover {
  cursor: pointer;
}

.inactive {
    opacity: 0.5;
}
svg {
    float: right;
    margin-right: 1em;
}
span {
    float:right;
}
.list-group-item {
     background-color: inherit
}
.b-sidebar-outer >>> .display-3 {
    font-size: 2em;
}

.list-group-item {
    text-align: left;
}
.list-group-item.active {
    background-color: #61892F;
    border-color: inherit;
}
.info {
    text-align: right;
}
</style>
