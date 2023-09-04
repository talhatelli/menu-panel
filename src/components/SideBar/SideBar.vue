<template>
  <a-layout-sider>
    <a-menu class="custom-menu" v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline">
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <laptop-outlined />
            Menu Item
          </span>
        </template>
        <a-menu-item key="5">
          <nav>
            <RouterLink to="/menu-items">List</RouterLink>
          </nav>
        </a-menu-item>
        <a-menu-item key="6">
          <nav>
            <RouterLink to="/menu-items/create">Create</RouterLink>
          </nav>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <laptop-outlined />
            Category
          </span>
        </template>
        <a-menu-item key="5">
          <nav>
            <RouterLink to="/categories">List</RouterLink>
          </nav>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts" setup>
import { reactive } from "vue"

const selectedKeys2 = reactive(["1"])
const openKeys = reactive(["sub1"])
</script>
<style scoped>
.custom-menu {
  height: 100%;
  background: #001529;
  border-right: 0;
  color: white;
}
</style>
