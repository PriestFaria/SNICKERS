<script setup>

import DrowerHead from "./DrowerHead.vue";
import CartItemList from "./CartItemList.vue";
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-65"></div>
  <div class="bg-white w-96 h-full top-0 right-0 fixed z-20 p-8">

    <DrowerHead/>
    <CartItemList/>

    <div class="flex flex-col gap-5  mt-7">

      <div class="flex gap-2">
        <span>Итого</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>12990 руб.</b>
      </div>

      <div class="flex gap-2">
        <span>Налог 5%</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>1200 руб.</b>
      </div>
      <button disabled="" class="bg-lime-500 w-full rounded-xl disabled:bg-slate-300 py-4 text-white hover:bg-lime-600 transition active:bg-lime-700 cursor-pointer mt-4">Оформить заказ</button>

    </div>

  </div>
</template>

<style scoped>

</style>