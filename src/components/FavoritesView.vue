<script setup>
import {onMounted, provide, ref, watch} from "vue";
import CardList from "./CardList.vue";
import EmptyCard from "./EmptyFavorites.vue"
import axios from "axios";
import EmptyFavorites from "./EmptyFavorites.vue";


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

const addToFavorite = () => {
  console.log('Unfavorited')
}


onMounted(async () => {
  await fetchFavorites()
})


const isEmptyFavorites = () => {
  console.log(favoritesItems.value)
  return favoritesItems.value.length === 0;
}

</script>

<template>

  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-10">Понравившиеся</h2>
    </div>
    <div class="mt-10" v-if="!isEmptyFavorites()">
      <CardList :items="favoritesItems" :add-to-favorite="addToFavorite"/>
    </div>
    <div v-else>
      <EmptyFavorites />
    </div>
  </div>

</template>

<style scoped>

</style>