<script setup>
import {onMounted, reactive, ref, watch, provide} from "vue";
import axios from "axios";

import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import Drower from "./components/Drower.vue";


</script>

<template>
  <!--  <Drower/>-->
  <div class="w-4/5 mx-auto bg-white rounded-xl shadow-xl mt-10">
    <Header/>
<!--    <div class="p-10">-->
<!--      <div class="flex justify-between items-center">-->
<!--        <h2 class="text-3xl font-bold mb-10">Все кроссовки</h2>-->
<!--        <div class="flex gap-4">-->
<!--          <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">-->
<!--            <option value="name">По названию</option>-->
<!--            <option value="price">По цене (дешевые)</option>-->
<!--            <option value="-price">По цене (дорогие)</option>-->
<!--          </select>-->


<!--          <div class="relative">-->
<!--            <img class="absolute left-3 top-3" src="/search.svg" alt="" srcset="">-->
<!--            <input @input="onChangeSearch" placeholder="Поиск..."-->
<!--                   class="border rounded-md py-2 pl-11 px-5 pr-4 outline-none focus:border-gray-400">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mt-10">-->
<!--        <CardList :items="items"/>-->
<!--      </div>-->
<!--    </div>-->
  <RouterView/>
  </div>
</template>

<style scoped>

</style>
