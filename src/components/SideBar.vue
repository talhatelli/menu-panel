<template>
  <a-layout-sider height="10px" width="200">
    <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
      :style="{ height: '100%', background: '#001529', borderRight: 0, color: 'white' }">
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            Dashboard
          </span>
        </template>
      </a-sub-menu>
      <a-sub-menu key="sub2">
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
      <a-sub-menu key="sub3">
        <template #title>
          <span>
            <notification-outlined />
            Categories
          </span>
        </template>
        <a-menu-item key="9">
          <nav>
            <RouterLink to="/categories">List</RouterLink>
          </nav>
        </a-menu-item>
        <a-menu-item key="10">
          <nav>
            <RouterLink to="/home">Create</RouterLink>
          </nav>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
  <RouterView />
</template>
<script lang="ts" setup>
import { reactive } from "vue"
import { RouterLink, RouterView } from 'vue-router'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons-vue"

const selectedKeys2 = reactive(["1"])
const openKeys = reactive(["sub1"])
</script>
