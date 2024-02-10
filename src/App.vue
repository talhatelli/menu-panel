<template>
  <Login v-if="!isLoggedIn" />
  <a-layout style="max-height: 100vh" v-else>
    <a-layout>
      <HeaderBar />
      <a-layout>
        <SideBar style="min-height: 217vh; max-height: 420vh" />
        <RouterView style="max-height: 217vh" />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue"
import Login from "@/views/Login/Login.vue"
import HeaderBar from "./components/HeaderBar/HeaderBar.vue"
import SideBar from "./components/SideBar/SideBar.vue"
import {loginStore} from "@/stores/loginStore"

export default defineComponent({
  components: {
    HeaderBar,
    SideBar,
    Login
  },
  setup() {
    const store = loginStore()
    const isLoggedIn = computed(() => !!store.login.token)

    return {isLoggedIn}
  }
})
</script>
