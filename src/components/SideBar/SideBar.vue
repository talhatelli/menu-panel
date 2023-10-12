<template>
  <a-layout-sider>
    <a-menu class="custom-menu" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline">
      <a-sub-menu key="menu-item-menu">
        <template #title>
          <span>
            <laptop-outlined />
            Menu Item
          </span>
        </template>
        <a-menu-item key="menu-item-list">
          <nav>
            <RouterLink to="/menu-items">List</RouterLink>
          </nav>
        </a-menu-item>
        <a-menu-item key="menu-item-create">
          <nav>
            <RouterLink to="/menu-items/create">Create</RouterLink>
          </nav>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="category-menu">
        <template #title>
          <span>
            <laptop-outlined />
            Category
          </span>
        </template>
        <a-menu-item key="category-menu-list">
          <nav>
            <RouterLink to="/categories">List</RouterLink>
          </nav>
        </a-menu-item>
        <a-menu-item key="categories-create">
          <nav>
            <RouterLink to="/categories/create">Create</RouterLink>
          </nav>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts" setup>
import {reactive} from "vue"

const selectedKeys = reactive(["menu-item-list"])
const openKeys = reactive(["menu-item-menu"])
</script>
<style scoped>
.custom-menu {
  height: 100%;
  border-right: 0;
  color: white;
}
</style>
