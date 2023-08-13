<template>
  <a-layout-sider height="10px" width="200">
    <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
      :style="{ height: '100%', background: '#001529', borderRight: 0, color: 'white' }">
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
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
  <RouterView />
</template>
<script lang="ts" setup>
import { reactive } from "vue"

const selectedKeys2 = reactive(["1"])
const openKeys = reactive(["sub1"])
</script>
