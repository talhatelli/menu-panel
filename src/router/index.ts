import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu-items',
      name: 'menu-items',
      component: () => import('../views/MenuItems.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/menu-items/create',
      name: 'menu-items-create',
      component: () => import('../views/MenuItemForm.vue')
    },
  ]
})

export default router
