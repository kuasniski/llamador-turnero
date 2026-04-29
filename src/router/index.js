import { createRouter, createWebHistory } from 'vue-router'

import AdminView from '../views/AdminView.vue'
import DisplayView from '../views/DisplayView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/admin',
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/display',
      name: 'display',
      component: DisplayView,
    },
  ],
})

export default router
