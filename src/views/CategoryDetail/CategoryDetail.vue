<template>
  <div class="table-container">
    <div class="delete">
      <a-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="handleDelete">
        <template #title>
          <p @click="deleteCategoryItem">Are you sure to delete ?</p>
        </template>
        <a-button class="button">Delete</a-button>
      </a-popconfirm>
    </div>
    <div class="edit">
      <a-button class="button">Edit</a-button>
    </div>
    <a-table class="table" :columns="columns" :data-source="data">
      <template #bodyCell="{column, record}">
        <template v-if="column.key === 'imageUrl'">
          <img :src="record.imageUrl" class="table-image" />
        </template>
        <template v-else-if="column.key === 'name'"> </template>
        <template v-else-if="column.key === 'price'"> </template>
        <template v-else-if="column.key === 'date'">
          <a-timeline>
            <a-timeline-item color="green">
              Created <br />
              {{ formatDate(record.date) }}</a-timeline-item
            >
            <a-timeline-item>
              Update<br />
              <p>{{ formatDate(record.updatedAt) }}</p>
            </a-timeline-item>
          </a-timeline>
        </template>
        <template v-else-if="column.key === 'status'">
          <a-switch checked-children="✓" un-checked-children="X" v-model:checked="record.status" />
        </template>
        <template v-else-if="column.key === 'actions'">
          <a :href="'/menu-items/' + record.id">{{ record.actions }}</a>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import {categoryStore} from "@/stores/categoryStore"
import {useRoute, useRouter} from "vue-router"
import {useDateOptions} from "@/utils"
import "./style.css"

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = categoryStore()
    const data = ref([])
    const formatDate = useDateOptions

    interface Items {
      name: string
      price: number
      createdAt: string
      updatedAt: string
      isDeleted: boolean
      imageUrl: string
    }
    const handleDelete = () => {
      const itemId = route.params.id
      store.deleteCategoryItem(itemId).then(() => {
        router.push("/categories")
      })
    }
    onMounted(async () => {
      const itemId = route.params.id
      await store.fetchCategoryDetail(itemId)
      const items: items[] = store.getCategoryDetail

      data.value = items.map(item => {
        return {
          id: item._id,
          name: item.name,
          price: item.price,
          date: item.createdAt,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          status: item.isDeleted,
          actions: "Detail Edit",
          imageUrl: item.imageUrl
        }
      })
    })

    const columns = [
      {
        dataIndex: "imageUrl",
        key: "imageUrl",
        scopedSlots: {customRender: "imageSlot"}
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        scopedSlots: {customRender: "nameSlot"}
      },
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
      },
      {
        title: "STATUS",
        dataIndex: "status",
        key: "status",
        ellipsis: true
      },
      {
        title: "ACTIONS",
        dataIndex: "actions",
        key: "actions",
        ellipsis: true
      }
    ]

    return {
      columns,
      data,
      formatDate,
      handleDelete
    }
  }
})
</script>
