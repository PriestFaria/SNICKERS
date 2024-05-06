<script setup>
import {onMounted, provide, ref, watch} from "vue";
import CardList from "./CardList.vue";
import axios from "axios";


const favoritesItems = ref([])
const fetchFavorites = async () => {
  try {
    const {data: favorites} = await axios.get(`https://f32f8890a41a67bd.mokky.dev/favorites`,)

    favoritesItems.value = favorites.map(obj => ({
      ...obj,
      isFavorite: false,
      isAdded: false,
    }))
    console.log(favoritesItems)
  } catch (error) {
    console.log(error)
  }
}


onMounted(async () => {
  await fetchFavorites()
})

</script>

<template>

  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-10">Понравившиеся</h2>
    </div>
    <div class="mt-10">
      <CardList :items="favoritesItems"/>
    </div>
  </div>

</template>

<style scoped>

</style>