<template>
  <a-layout-header class="header">
    <div class="icon logo" />
    <div class="icon icon-user" />
    <a-breadcrumb class="breadcrumb">
      <p class="mail">{{ mail }} </p>
    </a-breadcrumb>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import "./style.css"

export default defineComponent({
  setup() {
    const mail = "ahmettalhatelli1453@gmail.com";
    return {
      mail
    };
  },
});
</script>
