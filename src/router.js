import {createRouter, createWebHistory} from 'vue-router'
import Index from './views/index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/:name?', component: Index},
    // {path: '/:slug?', component: Index},
  ],
})
