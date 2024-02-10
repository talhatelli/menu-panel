import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Login.vue';
import MenuItemList from '@/views/MenuItemList/MenuItemList.vue';
import CategoryList from '@/views/CategoryList/CategoryList.vue'
import MenuItemForm from '@/views/MenuItemForm/MenuItemForm.vue'
import CategoryCreate from '@/views/CategoryCreate/CategoryCreate.vue';
import MenuItemDetail from '@/views/MenuItemDetail/MenuItemDetail.vue';
import MenuItemEdit from '@/views/MenuItemEdit/MenuItemEdit.vue';
import CategoryEdit from '@/views/CategoryEdit/CategoryEdit.vue';
import CategoryDetail from '@/views/CategoryDetail/CategoryDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
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
      component: CategoryCreate
    },
    {
      path: '/menu-items/:id',
      name: 'menu-item-detail',
      component: MenuItemDetail
    },
    {
      path: '/menu-items/:id/edit',
      name: 'menu-item-edit',
      component: MenuItemEdit
    },
    {
      path: '/categories/:id/edit',
      name: 'categories-edit',
      component: CategoryEdit
    },
    {
      path: '/categories/:id/items/:name',
      name: 'category-detail',
      component: CategoryDetail
    },
  ]
})
export default router


