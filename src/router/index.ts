import { createRouter, createWebHistory } from 'vue-router'

import MenuItemList from '@/views/MenuItemList/MenuItemList.vue';
import CategoryList from '@/views/CategoryList/CategoryList.vue'
import MenuItemForm from '@/views/MenuItemForm/MenuItemForm.vue'
import CategoryCreate from '@/views/CategoryCreate/CategoryCreate.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/menu-items',
      name: 'menu-items',
      component: MenuItemList
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoryList
    },
    {
      path: '/menu-items/create',
      name: 'menu-items/create',
      component: MenuItemForm
    },
    {
      path: '/categories/create',
      name: 'categories-create',
      component:  CategoryCreate
    },
  ]
})

export default router


