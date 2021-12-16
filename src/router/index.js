import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/starships',
    name: 'StarshipList',
    component: () => import(/* webpackChunkName: "starship-list" */ '../views/StarshipList.vue'),
    beforeEnter: (to, from) => {
      if (store.state.isLoggedIn === false) {
        return ({name: 'Home'});
      }
    }
  },
  {
    path: '/starships/:id',
    name: 'StarshipCard',
    component: () => import(/* webpackChunkName: "starship-card" */ '../views/StarshipCard.vue'),
    beforeEnter: (to, from) => {
      if (store.state.isLoggedIn === false) {
        return ({name: 'Home'});
      }
    }
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
