<template>
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
        <a href="url">{{ record.actions }}</a>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import {menuItemListStore} from "@/stores/menuItemListStore"
import {useDateOptions} from "@/utils"
import "./style.css"

export default defineComponent({
  setup() {
    const store = menuItemListStore()
    const data = ref([])
    const formatDate = useDateOptions

    interface Items {
      name: string
      description: string
      price: number
      createdAt: string
      updatedAt: string
      isDeleted: boolean
      imageUrl: string
    }

    onMounted(async () => {
      await store.fetcMenuItem()
      const items: items[] = store.getMenuItem
      data.value = items.map(item => {
        return {
          name: item.name,
          address: item.description,
          price: item.price,
          date: item.createdAt,
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
      useDateOptions
    }
  }
})
</script>
