import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import Vue3Material from 'vue3-material';

createApp(App).use(store).use(Vue3Material).mount('#app')
