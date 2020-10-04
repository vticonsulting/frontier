import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import DefaultLayout from './layouts/default.vue'
import './index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('DefaultLayout', DefaultLayout)
app.mount('#app')
