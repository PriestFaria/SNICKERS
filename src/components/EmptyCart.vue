<script setup>

</script>

<template>
  <div class="h-96 relative flex justify-center items-center">
    <div class="absolute top-1/4 ">
      <div class="flex flex-col items-center">
        <img src="../../public/emoji-2.png" alt="sad_emoji" srcset="" class="w-16 -translate-x-1">
        <b class="  mt-5  ">У вас нет заказов</b>
        <span class=" text-slate-400  ">Вы нищеброд?</span>
        <span class="text-slate-400  ">Сделайте хотя бы один заказ.</span>
        <RouterLink to="/" class="w-full">
          <div>
            <button
                class="bg-lime-500 w-full rounded-xl disabled:bg-slate-300 py-4 text-white hover:bg-lime-600 transition active:bg-lime-700 cursor-pointer mt-4">
              На главную
            </button>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>