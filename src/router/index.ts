import { createRouter, createWebHistory } from 'vue-router'

import MenuItemListView from '@/views/MenuItemListView/MenuItemListView.vue';
import CategoryList from '../views/CategoryListView/CategoryListView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/menu-items',
      name: 'menu-items',
      component:  MenuItemListView
    },
    {
      path: '/categories',
      name: 'categories',
      component:  CategoryList
    },
  ]
})

export default router
