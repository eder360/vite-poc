import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VuexStore from "remoteApp/VuexStore"
import Button from "remoteApp/Button"

console.log('teste: ' + VuexStore)

createApp(App).use(VuexStore).mount('#app')
