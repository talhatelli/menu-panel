<template>
  <a-card class="general_card add_form menu-item" :bordered="false" :loading="loading" title="Menu Item Detail">
    <div class="menu-item-layoute" v-if="data.name">
      <a-image style="border-radius: 3%; width: 200px; height: 150px" :src="data.imageUrl" />
      <div class="menu-item-info">
        <a-typography-title style="color: #6f6f6f" :level="2">{{ data.name }}</a-typography-title>
        <a-typography-paragraph class="line" copyable>
          {{ data.description }}
        </a-typography-paragraph>
        <div class="line" copyable>
          {{ data.price }}
        </div>
      </div>
    </div>
    <div class="date">
      <div class="create-at">
        <font-awesome-icon icon="calendar-plus" /><font-awesome-icon icon="fa-regular fa-calendar-plus" /> Created At:
        {{ formatDate(data.createdAt) }}
      </div>
      <div class="update-at">
        <font-awesome-icon :icon="['fas', 'calendar-check']" /> Updated At:
        {{ formatDate(data.updatedAt) }}
      </div>
    </div>

    <div class="footer">
      <div class="line"></div>
      <p class="categories">Categories</p>
      <div class="categories-info-background">
        <SettingOutlined class="setting-outlined" />
        <div class="categories-info">
          <p class="categories-info-p" v-for="category in data.categories" :key="category.id">
            {{ category.name }}
          </p>
        </div>
      </div>
    </div>
  </a-card>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import {menuItemStore} from "@/stores/menuItemStore"
import {useRoute} from "vue-router"
import {SettingOutlined} from "@ant-design/icons-vue"
import {useDateOptions} from "@/utils"
import "./style.css"

export default defineComponent({
  components: {
    SettingOutlined
  },
  setup() {
    const route = useRoute()
    const store = menuItemStore()
    const formatDate = useDateOptions
    const data = ref({
      name: "",
      description: "",
      price: 0,
      createdAt: "",
      updatedAt: "",
      imageUrl: "",
      categories: []
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
          imageUrl: item.imageUrl,
          categories: item.categories
        }
      }
      console.log("item", item)
    })

    return {
      data,
      formatDate
    }
  }
})
</script>
