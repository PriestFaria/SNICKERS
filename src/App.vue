<script setup>
import {onMounted, reactive, ref, watch, provide} from "vue";
import {isAuthenticated} from "./auth.js";
import axios from "axios";

import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import Drower from "./components/Drower.vue";


const isDrowerOpen = ref(false);
const isAuthenticatedRender = ref(false);

function toggleDrower() {
  isDrowerOpen.value = !isDrowerOpen.value;
  console.log('toggled!')
}

const renderAuthorize = () =>{
  isAuthenticatedRender.value = true;
  console.log("AUTHORIZED!!")
}
const renderExitAuthorize = () =>{
  isAuthenticatedRender.value = false;
}

provide('isDrowerOpen', isDrowerOpen);
provide('isAuth', isAuthenticatedRender)
provide('toggleDrower', toggleDrower);
provide('renderAuthorize', renderAuthorize);
provide('renderExitAuthorize', renderExitAuthorize);
onMounted(() => {
  if(isAuthenticated()){
    renderAuthorize();
  }
})
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
