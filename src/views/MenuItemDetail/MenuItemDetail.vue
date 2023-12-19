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
      <img
        class="img"
        :src="data.imageUrl"
        @error="handleImageError(data._id)"
        v-if="!imageErrors.includes(data._id)"
      />
      <img class="error-image" src="/src/assets/icons/no-picture-taking.png" v-if="imageErrors.includes(data._id)" />
      <div class="menu-item-info">
        <a-typography-title class="title" :level="2">{{ data.name }}</a-typography-title>
        <a-typography-paragraph class="line" copyable v-if="data.description.length > 0">
          {{ data.description }}
        </a-typography-paragraph>
        <div class="price-text">{{ data.price }} TL</div>
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
      <div class="categories-info-background" :style="{width: calculateWidth + 'px'}">
        <SettingOutlined class="setting-outlined" />
        <div class="categories-info">
          <p class="categories-info-p" v-for="(category, index) in data.categories" :key="index">
            {{ category && category.name ? category.name : "There is no category" }}
          </p>
        </div>
      </div>
    </div>
    <div class="table-container">
      <a-table :columns="columns" :data-source="dataPrice">
        <template #bodyCell="{column, record}">
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
import {defineComponent, onMounted, ref, computed} from "vue"
import {menuItemStore} from "@/stores/menuItemStore"
import {useRoute, useRouter} from "vue-router"
import {SettingOutlined} from "@ant-design/icons-vue"
import {useDateOptions} from "@/utils"
import "./style.css"

const maxWidthPerCharacter = 20

export default defineComponent({
  components: {
    SettingOutlined
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = menuItemStore()
    const formatDate = useDateOptions
    const imageErrors = ref([])

    const handleImageError = dataId => {
      imageErrors.value.push(dataId)
    }
    const data = ref({
      _id: "",
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

    const calculateWidth = computed(() => {
      if (data.value.categories.length === 0) {
        return 0
      }

      const totalCharacters = data.value.categories.reduce((total, category) => {
        if (category && category.name) {
          return total + category?.name?.length
        }
        return total
      }, 0)

      return maxWidthPerCharacter * (data.value.categories.length === 0 ? 13 : totalCharacters)
    })

    onMounted(async () => {
      const itemId = route.params.id
      await store.fetchMenuItemDetail(itemId)
      await store.fetchMenuItemPrice(itemId)
      const menuItemDetail = store.getMenuItemDetail
      const menuItemPrice = store.getMenuItemPrice
      console.log(data.value.categories.length)

      data.value = menuItemDetail
      dataPrice.value = menuItemPrice
    })

    return {
      data,
      formatDate: useDateOptions,
      columns: columns.value,
      dataPrice,
      handleDelete,
      calculateWidth,
      handleImageError,
      imageErrors
    }
  }
})
</script>
