<script setup>
import Card from "./Card.vue";

defineProps({
  items: Array,
  addToFavorite: Function,
})
const onClickAdd = () => {
  console.log('Added');
}

</script>

<template>
  <div class="grid grid-cols-4 gap-5">


    <Card :id="item.id" v-for="item in items" :title="item.title" :image-url="'public' + item.imageUrl"
          :price="item.price"
          :is-favorite="item.isFavorite" :on-click-add="onClickAdd" :on-click-favorite="() => {addToFavorite(item)}"/>
  </div>
</template>

<style scoped>

</style>