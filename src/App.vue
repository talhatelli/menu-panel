<template>
  <a-layout>
    <HeaderBar />
    <a-layout style="height: 100vh; background: #ffffff">
      <SideBar />
      <RouterView />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import HeaderBar from "./components/HeaderBar/HeaderBar.vue"
import SideBar from "./components/SideBar/SideBar.vue"

export default defineComponent({
  components: {
    HeaderBar,
    SideBar
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
