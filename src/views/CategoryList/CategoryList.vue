<template>
  <a-table class="table" :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'"> </template>
      <template v-else-if="column.key === 'createdAt'">
        <a-timeline>
          {{ formatDate(record.createdAt) }}
        </a-timeline>
      </template>
      <template v-else-if="column.key === 'updatedAt'">
        {{ formatDate(record.updatedAt) }}
      </template>
      <template v-else-if="column.key === 'actions'">
        <div>
          <a :href="'/categories/' + record.id + '/items'">Detail </a>
          <RightSquareOutlined style="color: #3098fe" />
          <span> |</span>
          <a :href="'/categories/' + record.id + '/edit'"> Edit </a>
          <EditOutlined style="color: #dbb12f" />
        </div>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import {RightSquareOutlined, EditOutlined} from "@ant-design/icons-vue"
import {categoryStore} from "@/stores/categoryStore"
import {useDateOptions} from "@/utils"
import "./style.css"

export default defineComponent({
  components: {
    RightSquareOutlined,
    EditOutlined
  },
  setup() {
    const store = categoryStore()
    const data = ref([])
    const formatDate = useDateOptions

    onMounted(async () => {
      await store.fetchCategories()
      const items: items[] = store.getCategories
      data.value = items.map(item => {
        return {
          id: item._id,
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
        scopedSlots: { customRender: "nameSlot" }
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
