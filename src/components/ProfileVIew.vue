<script setup>

import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import CardList from "./CardList.vue";
import EmptyFavorites from "./EmptyFavorites.vue";
import EmptyCart from "./EmptyCart.vue";

const router = useRouter()
const route = useRoute()


const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({query: {search}})
  }
})




</script>

<template>
  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-10">Мои заказы</h2>
    </div>
    <div class="mt-10" v-if="false">
      <CardList :items="favoritesItems" :add-to-favorite="addToFavorite"/>
    </div>
    <div v-else>
      <EmptyCart />
    </div>
  </div>
</template>

<style scoped>

</style>