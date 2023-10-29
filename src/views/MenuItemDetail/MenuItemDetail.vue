<template>
  <a-card class="general_card add_form menu-item" :bordered="false" :loading="loading" title="Menu Item Detail">
    <div class="popconfirm-delete">
      <a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="handleDelete">
        <template #title>
          <p>Are you sure to delete ?</p>
        </template>
        <a-button class="button">Delete</a-button>
      </a-popconfirm>
    </div>
    <div class="popconfirm-edit">
      <a-button class="button">Edit</a-button>
    </div>
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
      <a-table style="color: #3098fe" :columns="columns" :data-source="dataPrice">
        <template #bodyCell="{column, record}">
          <template v-if="column.key === 'price'"> </template>
          <template v-else-if="column.key === 'date'">
            <a-timeline>
              <a-timeline-item color="green">
                <p class="table">{{ formatDate(record.updatedAt) }}</p>
              </a-timeline-item>
            </a-timeline>
          </template>
        </template>
      </a-table>
    </div>
  </a-card>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import {menuItemStore} from "@/stores/menuItemStore"
import {useRoute, useRouter} from "vue-router"
import {SettingOutlined} from "@ant-design/icons-vue"
import {useDateOptions} from "@/utils"
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
    const handleDelete = () => {
      const itemId = route.params.id
      store.deleteMenuItem(itemId).then(() => {
        router.push("/menu-items")
      })
    }

    onMounted(async () => {
      const itemId = route.params.id
      await store.fetchMenuItemDetail(itemId)
      await store.fetchMenuItemPrice(itemId)

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
      const priceItem: priceItem[] = store.getMenuItemPrice
      dataPrice.value = priceItem.map(priceItem => {
        return {
          price: priceItem.price,
          updatedAt: priceItem.updatedAt
        }
      })
    })

    return {
      data,
      formatDate,
      columns: columns.value,
      dataPrice,
      handleDelete
    }
  }
})
</script>
