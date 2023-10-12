import { createRouter, createWebHistory } from 'vue-router'

import MenuItemListView from '@/views/MenuItemListView/MenuItemListView.vue';
import CategoryListView from '@/views/CategoryListView/CategoryListView.vue'
import MenuItemFormView from '@/views/MenuItemFormView/MenuItemFormView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/menu-items',
      name: 'menu-items',
      component: MenuItemListView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoryListView
    },
    {
      path: '/menu-items/create',
      name: 'menu-items/create',
      component: MenuItemFormView
    },
  ]
})

export default router


