<template>
  <!-- card -->
  <router-link :to="{ name: 'Character creation' }">
    <div class="card w-20 border-california-200 border-2 bg-guardsman-red-800 rounded-lg mb-3 mx-2 text-trinidad-500">
      <div class="relative" style="padding-top:100%">
        <div class="absolute left-0 top-0 w-20 h-20">
          <div class="flex w-full h-full justify-center">
            <div class= "flex flex-col h-full w-full items-center">
                <font-awesome-icon icon="plus" class="text-4xl w-20 h-20 text-tahiti-gold-500" />
            </div>
          </div>
        </div>
      </div>
        <h3 class="flex items-center justify-center font-semibold mb-2">
            Neu
        </h3>
    </div>
  </router-link>
</template>
<style>
