<script setup>
import CardList from "./CardList.vue";





</script>

<template>

  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-10">Моя корзина</h2>
    </div>
    <div class="mt-10">
      <CardList :items="items"/>
    </div>
  </div>

</template>

<style scoped>

</style>