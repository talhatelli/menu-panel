import { createRouter, createWebHistory } from 'vue-router'

import MenuItemListView from '@/views/MenuItemListView/MenuItemListView.vue';
import CategoryList from '@/views/CategoryListView/CategoryListView.vue';
import CategoryCreate from '@/views/CategoryCreateView/CategoryCreateView.vue';

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
    {
      path: '/categories/create',
      name: 'categories-create',
      component:  CategoryCreate
    },
  ]
})

export default router
