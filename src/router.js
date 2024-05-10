import { createRouter, createWebHistory} from 'vue-router'

import HomeView from './components/HomeView.vue'
import FavoritesView from './components/FavoritesView.vue'
import ProfileVIew from "./components/ProfileVIew.vue";
import LoginView from "./components/LoginView.vue";
import {isAuthenticated} from './auth.js'
const routes = [
    {path: '/', component: HomeView},
    {path: '/favorites', component: FavoritesView},
    {path: '/profile', component: ProfileVIew, meta: {requiresAuth: true}},
    {path: '/login', component: LoginView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Данный роут требует аутентификации, проверим залогинен ли пользователь
        // Если пользователь не залогинен, перенаправим его на страницу логина
        if (!isAuthenticated()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // сохраняем полный путь для того, чтобы перенаправить пользователя обратно после логина
            });
        } else {
            // Если пользователь залогинен, разрешаем переход на страницу
            next();
        }
    } else {
        // Если роут не требует аутентификации, разрешаем переход
        next();
    }
});


export default router