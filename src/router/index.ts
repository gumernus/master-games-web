import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/novinky',
    name: 'Novinky',
    component: () => import('../views/Novinky.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
