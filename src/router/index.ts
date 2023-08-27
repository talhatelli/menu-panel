import { createRouter, createWebHistory } from 'vue-router'

import MenuItemListView from '@/views/MenuItemListView/MenuItemListView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/menu-items',
      name: 'menu-items',
      component: () => MenuItemListView
    },
  ]
})

export default router
