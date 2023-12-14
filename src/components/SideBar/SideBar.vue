<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-sub-menu key="menu-item-menu">
        <template #title> <OrderedListOutlined /> <span> Menu Item </span> </template>
        <a-menu-item key="menu-item-list"> <RouterLink to="/menu-items">List</RouterLink> </a-menu-item>
        <a-menu-item key="menu-item-create"> <RouterLink to="/menu-items/create">Create</RouterLink> </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="category-menu">
        <template #title>
          <span> <UnorderedListOutlined /> <span> Category </span> </span>
        </template>
        <a-menu-item key="category-menu-list"> <RouterLink to="/categories">List</RouterLink> </a-menu-item>
        <a-menu-item key="categories-create"> <RouterLink to="/categories/create">Create</RouterLink> </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts" setup>
import {OrderedListOutlined, UnorderedListOutlined} from "@ant-design/icons-vue"
import {ref} from "vue"
const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(["1"])
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
