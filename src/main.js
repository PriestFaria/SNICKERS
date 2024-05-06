import {createApp} from 'vue'
import {createStore} from "vuex";
import router from "./router.js";
import './style.css'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
})



const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');