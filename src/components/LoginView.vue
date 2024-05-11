<template>

  <div class="flex items-center justify-center min-h-screen flex-col">

    <div
        :class="form.isValid ? `max-w-md w-full bg-white p-8 border border-gray-300 rounded-md shadow-md` : `max-w-md w-full bg-red-200 p-8 border border-red-900 rounded-md shadow-md`">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="pr-10 pt-10">
          <div class="flex justify-between ">
            <h2 class="text-3xl font-bold">Вход</h2>
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
                placeholder="Имя"
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
            Sign in
          </button>
        </div>
        <div v-if="!form.isValid">Пользователь не найден</div>
      </form>

    </div>
    <div class="mt-5 flex flex-col">
      <span>Не зарегистрированы?</span><br/>
      <RouterLink to="/registration" class="m-auto">
        <a href="/registration" class="m-auto text-blue-500">Зарегистрироваться</a>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {authenticate} from "../auth.js";
import {useRouter} from "vue-router";
import {reactive, toRefs, ref, onMounted, inject} from 'vue';


const renderAuthorize = inject('renderAuthorize');

const form = reactive({
  username: '',
  password: '',
  isValid: true,
});


const router = useRouter();

const fetchUsers = async (form) => {
  try {
    const params = {
      username: form.username,
      password: form.password,
    }
    const {data: users} = await axios.get('https://f32f8890a41a67bd.mokky.dev/users', {params})
    return users;
  } catch (error) {
    console.log(error)
    form.isValid = false;
  }
}

onMounted(() => {
  form.isValid = true;
})

async function submitForm() {
  console.log("Submitted:", form);
  try {
    let users = await fetchUsers(form);
    console.log("Users:", users);

    if (users && users.some(user => authenticate(user.id, user.username))) {
      console.log("Authentication successful");
      renderAuthorize();
      router.push('/profile');
    } else {
      console.log("Authentication failed");
      form.isValid = false;
    }
  } catch (error) {
    console.error("Error during submission:", error);
    form.isValid = false;
  }
}
</script>