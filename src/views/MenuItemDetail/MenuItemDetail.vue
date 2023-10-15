<template>
  <div v-if="data.name">
    <h1>{{ data.name }}</h1>
    <p>Description: {{ data.description }}</p>
    <p>Price: {{ data.price }}</p>
    <p>Created Date: {{ data.createdAt }}</p>
    <p>Updated Date: {{ data.updatedAt }}</p>
    <img :src="data.imageUrl" alt="Image" />
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import {menuItemStore} from "@/stores/menuItemStore"
import {useRoute} from "vue-router"
import "./style.css"

export default defineComponent({
  setup() {
    const route = useRoute()
    const store = menuItemStore()
    const data = ref({
      name: "",
      description: "",
      price: 0,
      createdAt: "",
      updatedAt: "",
      imageUrl: ""
    })

    onMounted(async () => {
      const itemId = route.params.id
      await store.fetchMenuItemDetail(itemId)

      const item = store.getMenuItemDetail
      if (item) {
        data.value = {
          name: item.name,
          description: item.description,
          price: item.price,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          imageUrl: item.imageUrl
        }
      }
    })

    return {
      data
    }
  }
})
</script>
