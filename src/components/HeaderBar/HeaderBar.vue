<template>
  <a-layout-header class="header-container">
    <div class="icon-container">
      <div class="logo" />
    </div>

    <a-dropdown>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <UserOutlined />
            Change Password
          </a-menu-item>
          <a-menu-item @click="handleLogout">
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
import {defineComponent} from "vue"
import "./style.css"
import {useRouter} from "vue-router"

export default defineComponent({
  setup() {
    const router = useRouter()

    const handleLogout = async () => {
      await localStorage.setItem("token", "")
      await location.reload()
      await router.push("/login")
    }
    const mail =localStorage.getItem('email');
    return {
      mail,
      handleLogout
    }
  }
})
</script>
