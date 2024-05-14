
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import { inject } from "@vercel/analytics"
inject();
const app = createApp(App)



app.use(router)


app.mount('#app')

