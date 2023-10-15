<template>
  <a-table class="table" :columns="columns" :data-source="data">
    <template #bodyCell="{column, record}">
      <template v-if="column.key === 'name'"> </template>
      <template v-else-if="column.key === 'createdAt'">
        <a-timeline>
          <a-timeline-item color="green">
            Created <br />
            {{ formatDate(record.createdAt) }}
          </a-timeline-item>
        </a-timeline>
      </template>
      <template v-else-if="column.key === 'updatedAt'">
        <a-timeline-item>
          Update<br />
          {{ formatDate(record.updatedAt) }}
        </a-timeline-item>
      </template>
      <template v-else-if="column.key === 'actions'">
        <a href="url">{{ record.actions }}</a>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import {categoryStore} from "@/stores/categoryStore"
import {useDateOptions} from "@/utils"
import "./style.css"

export default defineComponent({
  setup() {
    const store = categoryStore()
    const data = ref([])
    const formatDate = useDateOptions
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Item {
      name: string
      createdAt: string
      updatedAt: string
    }
    onMounted(async () => {
      await store.fetchCategories()
      const items: items[] = store.getCategories
      data.value = items.map(item => {
        return {
          name: item.name,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          actions: "Detail Edit"
        }
      })
    })
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        scopedSlots: {customRender: "nameSlot"}
      },
      {
        title: "Create At",
        dataIndex: "createdAt",
        key: "createdAt",
        ellipsis: true
      },
      {
        title: "Updated At",
        dataIndex: "updatedAt",
        key: "updatedAt",
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
      formatDate
    }
  }
})
</script>
