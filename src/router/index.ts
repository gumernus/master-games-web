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
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/kontakty',
    name: 'Kontakty',
    component: () => import('../views/Kontakty.vue')
  },

  //pravidla
  {
    path: '/pravidla/minecraft',
    name: 'Minecraft',
    component: () => import('../views/pravidla/Minecraft.vue')
  },
  {
    path: '/pravidla/discord',
    name: 'Discord',
    component: () => import('../views/pravidla/Discord.vue')
  },
  {
    path: '/pravidla/teamspeak',
    name: 'Teamspeak',
    component: () => import('../views/pravidla/Teamspeak.vue')
  },
  {
    path: '/pravidla/GDPR',
    name: 'GDPR',
    component: () => import('../views/pravidla/GDPR.vue')
  },

  //nábory

  {
    path: '/nábory/helper',
    name: 'Helper',
    component: () => import('../views/nábory/Helper.vue')
  },{
    path: '/nábory/builder',
    name: 'Builder',
    component: () => import('../views/nábory/Builder.vue')
  },{
    path: '/nábory/developer',
    name: 'Developer',
    component: () => import('../views/nábory/Developer.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
