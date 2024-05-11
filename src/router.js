import { createRouter, createWebHistory} from 'vue-router'

import HomeView from './components/HomeView.vue'
import FavoritesView from './components/FavoritesView.vue'
import ProfileVIew from "./components/ProfileVIew.vue";
import LoginView from "./components/LoginView.vue";
import RegistrationView from "./components/RegistrationView.vue";
import {isAuthenticated} from './auth.js'
const routes = [
    {path: '/', component: HomeView},
    {path: '/favorites', component: FavoritesView, meta: {requiresAuth: true}},
    {path: '/profile', component: ProfileVIew, meta: {requiresAuth: true}},
    {path: '/login', component: LoginView},
    {path: '/registration', component: RegistrationView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (!isAuthenticated()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router