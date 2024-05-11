<template>
  <div class="flex items-center justify-center min-h-screen flex-col">
    <div class="max-w-md w-full bg-white p-8 border border-gray-300 rounded-md shadow-md">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <div class="pr-10 pt-10">
            <div class="flex justify-between ">
              <h2 class="text-3xl font-bold pb-5">Регистрация</h2>
            </div>
          </div>
          <label for="fullname" class="text-sm font-medium text-gray-700">Полное имя</label>
          <div class="mt-1">
            <input
                id="fullname"
                v-model="form.fullname"
                type="text"
                required
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
                placeholder="Ваше полное имя"
            />
          </div>
        </div>
        <div>
          <label for="email" class="text-sm font-medium text-gray-700">Email</label>
          <div class="mt-1">
            <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
                placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label for="username" class="text-sm font-medium text-gray-700">Имя пользователя</label>
          <div class="mt-1">
            <input
                id="username"
                v-model="form.username"
                type="text"
                required
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none"
                placeholder="Имя пользователя"
            />
          </div>
        </div>
        <div>
          <label for="password" class="text-sm font-medium text-gray-700">Пароль</label>
          <div class="mt-1">
            <input
                id="password"
                v-model="form.password"
                type="password"
                required
                class="w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Пароль"
            />
          </div>
        </div>
        <div>
          <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
    <div class="mt-5 flex flex-col">
      <span>Уже зарегистрированы?</span><br/>
      <RouterLink to="/login" class="m-auto">
        <a href="/login" class="m-auto text-blue-500">Войти</a>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import {useRouter} from "vue-router";


const form = reactive({
  fullname: '',
  email: '',
  username: '',
  password: '',
});

const router = useRouter()

async function submitForm() {


      alert("Authentication successful");
      router.push('/login');


}





</script>