import { createRouter, createWebHistory } from 'vue-router'
import DiceGenerator from '../components/DiceGenerator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: DiceGenerator },
  ],
})

export default router
