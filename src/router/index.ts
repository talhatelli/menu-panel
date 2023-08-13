import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/menu-items',
      name: 'menu-items',
      component: () => import('../views/MenuItemListView.vue')
    },
  ]
})

export default router
