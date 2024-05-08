<script setup>

import { inject } from "vue";

import DrowerHead from "./DrowerHead.vue";
import CartItemList from "./CartItemList.vue";

const isDrowerOpen = inject('isDrowerOpen');
</script>

<template>
  <transition name="overlay">
    <div v-if="isDrowerOpen" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-65"></div>
  </transition>

  <transition name="modal">
    <div v-if="isDrowerOpen" class="bg-white w-96 h-full top-0 right-0 fixed z-20 p-8">
      <DrowerHead/>
      <CartItemList/>
      <!-- Остальное содержимое модального окна -->
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
        <button disabled=""
                class="bg-lime-500 w-full rounded-xl disabled:bg-slate-300 py-4 text-white hover:bg-lime-600 transition active:bg-lime-700 cursor-pointer mt-4">
          Оформить заказ
        </button>

      </div>
    </div>
  </transition>


</template>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.overlay-enter-active, .overlay-leave-active {
  transition: opacity 0.5s;
}

.overlay-enter-from, .overlay-leave-to {
  opacity: 0;
}
</style>