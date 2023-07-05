<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="icon logo" />
      <div class="icon icon-user" />
      <a-menu v-model:selectedKeys="selectedKeys1" theme="dark" mode="horizontal" :style="{lineHeight: '64px'}">
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout style="height: 100vh; background: #441717">
      <a-layout-sider height="100%" width="200">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{height: '100%', background: '#001529', borderRight: 0, color: 'white'}"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <!-- content -->
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content :style="{background: '#fff', padding: '24px', margin: 0, minHeight: '280px'}">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {UserOutlined, LaptopOutlined, NotificationOutlined} from "@ant-design/icons-vue"
import {defineComponent, ref} from "vue"
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(["2"]),
      selectedKeys2: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(["sub1"])
    }
  }
})
</script>
<style>
.icon {
  background-size: 40px 40px; /* İstenilen genişlik ve yükseklik değerlerini burada belirtin */
  width: 40px; /* Logo boyutunu ayarlayın */
  height: 40px;
  float: left;
  margin: 16px 24px 16px 0;
  border-radius: 50%;
}
.logo {
  background-image: url("icons/logo.jpeg");
}
.icon-user {
  background-image: url("icons/user.png");
  float: right;
}

.admin-logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
