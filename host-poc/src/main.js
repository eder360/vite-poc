import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { store } from "remoteApp/VuexStore"
import Button from "remoteApp/Button"

createApp(App).use(store).mount('#app')
