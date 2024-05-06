import { createRouter, createWebHistory} from 'vue-router'

import HomeView from './components/HomeView.vue'
import FavoritesView from './components/FavoritesView.vue'
import CartView from "./components/CartView.vue";
import ProfileVIew from "./components/ProfileVIew.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/cart', component: CartView},
    {path: '/favorites', component: FavoritesView},
    {path: '/profile', component: ProfileVIew}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router