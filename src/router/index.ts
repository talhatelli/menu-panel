import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'dashboard',
    //   component: () => import('../views/Dashboard.vue')
    // },
    {
      path: '/menu-items',
      name: 'menu-items',
      component: () => import('../views/MenuItemListView.vue')
    },
    {
      path: '/menu-items/create',
      name: 'menu-items-create',
      component: () => import('../views/MenuItemFormView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/CategoriListView.vue')
    },
    {
      path: '/categories/create',
      name: 'categories-create',
      component: () => import('../views/CategoryFormView.vue')
    },
  ]
})

export default router
