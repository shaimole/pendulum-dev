<template>
  <div>
    <b-list-group-item class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5
          class="mb-1"
          v-b-toggle="inventory.name.replace(/\s+/g, '-').toLowerCase()"
        >
          {{ inventory.name }}
        </h5>
        <div>
          <font-awesome-icon
            icon="cog"
            v-b-toggle="
              inventory.name.replace(/\s+/g, '-').toLowerCase() + 'edit'
            "
          />
          <b-badge variant="primary" pill
            >{{ inventory.items.length }}\{{
              inventory.capacity ? inventory.capacity : '&#8734;'
            }}</b-badge
          >
        </div>
      </div>
      {{ inventory.desc }}
    </b-list-group-item>
    <b-sidebar
      :id="inventory.name.replace(/\s+/g, '-').toLowerCase() + 'edit'"
      title="Inventar bearbeiten"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <EditInventory :inventory="inventory" />
      </div>
    </b-sidebar>
    <b-sidebar
      :id="inventory.name.replace(/\s+/g, '-').toLowerCase()"
      :title="inventory.name"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <b-list-group>
          <b-list-group-item
            v-for="(item, index) in inventory.items"
            :key="item.name + index"
            :id="item.name"
          >
            <Item :item="item" :inventory="inventory" />
          </b-list-group-item>
          <b-list-group-item>
            <button v-b-toggle.newItem>+</button> Neuen Gegenstand erstellen
          </b-list-group-item>
        </b-list-group>
        <b-sidebar
          id="newItem"
          title="Einen neuen Gegenstand erstellen"
          bg-variant="dark"
          text-variant="light"
          shadow
        >
          <div class="px-3 py-2">
            <EditItem :inventory="inventory" />
          </div>
        </b-sidebar>
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
  margin-left: 1em;
}
svg:hover {
  cursor: pointer;
}
</style>
