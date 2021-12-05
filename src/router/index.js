import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/starships',
    name: 'StarshipList',
    component: () => import(/* webpackChunkName: "starship-list" */ '../views/StarshipList.vue')
  },
  {
    path: '/starships/:id',
    name: 'StarshipCard',
    component: () => import(/* webpackChunkName: "starship-card" */ '../views/StarshipCard.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
