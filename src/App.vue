<template>
  <a-layout>
    <HeaderBar />
    <a-layout style="height: 100vh; background: #ffffff">
      <SideBar />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import Content from "./components/Content.vue"
import HeaderBar from "./components/HeaderBar.vue"
import SideBar from "./components/SideBar.vue"

export default defineComponent({
  components: {
    SideBar,
    HeaderBar,
    Content
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
  background-size: 40px 40px;
  /* İstenilen genişlik ve yükseklik değerlerini burada belirtin */
  width: 40px;
  /* Logo boyutunu ayarlayın */
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
