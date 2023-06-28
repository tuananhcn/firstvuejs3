import './assets/main.css'

import { createApp, onMounted } from 'vue'
import App from './App.vue'
const app = createApp(App)
// app.config.globalProperties.SeverURL = "http://localhost:4000"

app.provide('SeverURL', 'https://5519-2402-800-61b3-3f08-6c8d-2fac-48b0-f496.ngrok-free.app')
app.mount('#app')
