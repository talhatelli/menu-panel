<template>
  <a-layout-header class="header-container">
    <div class="icon-container">
      <div class="logo" />
    </div>

    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="2">
            <UserOutlined />
            Change Password
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            Log out
          </a-menu-item>
        </a-menu>
      </template>
      <div class="email-dropdown-container">
        <div class="icon-user" />
        <div class="email-dropdown">
          {{ mail }}
        </div>

      </div>
    </a-dropdown>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "./style.css"
import type { MenuProps } from "ant-design-vue";

export default defineComponent({

  setup() {
    const handleMenuClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };

    const mail = "ahmettalhatelli1453@gmail.com";
    return {
      mail, handleMenuClick
    };
  },
});

</script>
