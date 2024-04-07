import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import BuyTicket from '../pages/BuyTicket.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buy',
    name: 'Buy Ticket',
    component: BuyTicket
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router