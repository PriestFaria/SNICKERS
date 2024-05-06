<script setup>

import CardList from "./CardList.vue";
import {onMounted, provide, reactive, ref, watch} from "vue";
import axios from "axios";


import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'

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

const items = ref([])


const filters = reactive({
  sortBy: '',
  searchQuery: ''
});

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,

    }
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const {data} = await axios.get(`https://f32f8890a41a67bd.mokky.dev/items`,
        {
          params
        })

    items.value = data.map(obj => ({
      ...obj,
      isFavorite: false,
      isAdded: false,
    }))
  } catch (error) {
    console.log(error)
  }
}

const onChangeSearch = (event) => {
  filters.searchQuery = event.target.value
}

const fetchFavorites = async () => {
  try {
    const {data: favorites} = await axios.get(`https://f32f8890a41a67bd.mokky.dev/favorites`,)

    items.value = items.value.map((item) => {
      const favorite = favorites.find(favorite => favorite.parentId === item.id);

      if (!favorite) {
        return item;
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const addToFavorite = async (item) => {
  item.isFavorite = true;
  console.log('lol')
  console.log(item);
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})

watch(filters, fetchItems)

provide('addToFavorite', addToFavorite)

</script>

<template>

  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-10">Все кроссовки</h2>
      <div class="flex gap-4">
        <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="-price">По цене (дорогие)</option>
        </select>


        <div class="relative">
          <img class="absolute left-3 top-3" src="/search.svg" alt="" srcset="">
          <input @input="onChangeSearch" placeholder="Поиск..."
                 class="border rounded-md py-2 pl-11 px-5 pr-4 outline-none focus:border-gray-400">
        </div>
      </div>
    </div>
    <div class="mt-10">
      <CardList :items="items"/>
    </div>
  </div>

</template>

<style scoped>

</style>