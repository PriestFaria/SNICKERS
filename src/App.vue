<script setup>
import {onMounted, reactive, ref, watch, provide} from "vue";
import axios from "axios";

import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import Drower from "./components/Drower.vue";


const isDrowerOpen = ref(false);

function toggleDrower() {
  isDrowerOpen.value = !isDrowerOpen.value;
  console.log('toggled!')
}



provide('isDrowerOpen', isDrowerOpen);
provide('toggleDrower', toggleDrower);


</script>

<template>
  <!--  <Drower/>-->
  <div class="w-4/5 mx-auto bg-white rounded-xl shadow-xl mt-10">
    <Header/>
    <Drower/>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
