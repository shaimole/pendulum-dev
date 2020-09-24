<template>
<div>
    <b-list-group-item class="flex-column align-items-start" >
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1" v-b-toggle="inventory.name.replace(/\s+/g, '-').toLowerCase()">{{inventory.name}}</h5>
            <b-badge variant="primary" pill>{{inventory.items.length}}\{{inventory.capacity ? inventory.capacity : '&#8734;'}}</b-badge>
        </div>
        {{inventory.desc}}
    </b-list-group-item>
     <b-sidebar :id="inventory.name.replace(/\s+/g, '-').toLowerCase()" :title="inventory.name" bg-variant="dark"  text-variant="light" shadow>
        <div class="px-3 py-2">
            <b-list-group>
                <b-list-group-item v-for="item in inventory.item" :key="item.name" :id="item.name">
                    <Item :item="item"/>
                </b-list-group-item>
                <b-list-group-item>
                <button>+</button> Neuen Gegenstand erstellen
                </b-list-group-item>
            </b-list-group>
        </div>
    </b-sidebar>
</div>
</template>
<script>
export default {
  props: {
    inventory: Object
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
}
</style>
