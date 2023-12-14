<template>
  <a-card class="general_card add_form menu-item" :bordered="false" :loading="loading" title="Menu Item Detail">
    <div class="popconfirm-delete">
      <a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="handleDelete">
        <template #title>
          <p>Are you sure to delete ?</p>
        </template>
        <a-button class="button" type="primary" primary>Delete</a-button>
      </a-popconfirm>
    </div>
    <div class="popconfirm-edit">
      <a-button class="button" :href="'/menu-items/' + data._id + '/edit'" type="primary" danger>Edit</a-button>
    </div>
    <div class="menu-item-layoute" v-if="data.name">
      <img class="img" :src="data.imageUrl" @error="handleImageError" v-if="!imageError" />
      <img class="img" src="/src/assets/icons/no-picture-taking.png" v-if="imageError" />
      <div class="menu-item-info">
        <a-typography-title class="title" :level="2">{{ data.name }}</a-typography-title>
        <a-typography-paragraph class="line" copyable v-if="data.description.length > 0">
          {{ data.description }}
        </a-typography-paragraph>
        <div class="line">
          {{ data.price }}
        </div>
      </div>
    </div>
    <div class="date">
      <div class="create-at">
        <font-awesome-icon icon="calendar-plus" /> Created At:
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
    <div class="table-container">
      <a-table :columns="columns" :data-source="dataPrice">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'price'"> </template>
          <template v-else-if="column.key === 'date'">
            <p>{{ formatDate(record.updatedAt) }}</p>
          </template>
        </template>
      </a-table>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import { menuItemStore } from "@/stores/menuItemStore"
import { useRoute, useRouter } from "vue-router"
import { SettingOutlined } from "@ant-design/icons-vue"
import { useDateOptions } from "@/utils"
import "./style.css"

export default defineComponent({
  components: {
    SettingOutlined
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = menuItemStore()
    const formatDate = useDateOptions
    const imageError = ref(false)

    const handleImageError = () => {
      imageError.value = true
    }
    const data = ref({
      name: "",
      description: "",
      price: 0,
      createdAt: "",
      updatedAt: "",
      imageUrl: "",
      categories: []
    })
    const dataPrice = ref([
      {
        price: 0,
        updatedAt: ""
      }
    ])
    const columns = ref([
      {
        title: "PRICE",
        dataIndex: "price",
        key: "price",
        ellipsis: true
      },
      {
        title: "DATE",
        dataIndex: "date",
        key: "date",
        ellipsis: true
      }
    ])
    const handleDelete = async () => {
      const itemId = route.params.id
      await store.deleteMenuItem(itemId)
      router.push("/menu-items")
    }

    onMounted(async () => {
      const itemId = route.params.id
      await store.fetchMenuItemDetail(itemId)
      await store.fetchMenuItemPrice(itemId)
      const menuItemDetail = store.getMenuItemDetail
      const menuItemPrice = store.getMenuItemPrice

      data.value = menuItemDetail
      dataPrice.value = menuItemPrice
    })
    return {
      data,
      formatDate: useDateOptions,
      columns: columns.value,
      dataPrice,
      handleDelete,
      imageError,
      handleImageError
    }
  }
})
</script>
