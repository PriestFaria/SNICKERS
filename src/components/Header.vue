<script setup>
import {inject} from "vue";
const toggleDrower = inject('toggleDrower')

</script>

<template>

  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <RouterLink to="/">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="logo" srcset="" class="w-10">
        <div>
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-600">Магазин лучших кроссовок</p>
        </div>
      </div>
    </RouterLink>

    <ul class="flex items-center gap-10 ">
      <li @click="()=>{toggleDrower()}" class="flex items-center gap-3 cursor-pointer  text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="cart" srcset="">
        <span>1205 руб.</span>
      </li>

      <RouterLink to="/favorites">
        <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
          <img src="/heart.svg" alt="favorites" srcset="">
          <span>Закладки</span>
        </li>
      </RouterLink>

      <RouterLink to="/profile">
        <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
          <img src="/profile.svg" alt="profile" srcset="">
          <span>Профиль</span>
        </li>
      </RouterLink>
    </ul>
  </header>

</template>

<style scoped>

</style>