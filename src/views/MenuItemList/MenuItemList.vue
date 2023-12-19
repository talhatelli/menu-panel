<template>
  <a-table class="table" :columns="columns" :data-source="data">
    <template #bodyCell="{column, record}">
      <template v-if="column.key === 'imageUrl'">
        <img
          class="table-image"
          :src="record.imageUrl"
          @error="handleImageError(record.id)"
          v-if="!imageErrors.includes(record.id)"
        />
        <img class="error-image" src="/src/assets/icons/no-picture-taking.png" v-if="imageErrors.includes(record.id)" />
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
        <a-popconfirm
          title="Are you sure you enabled or disabled it?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm(record)"
          @cancel="cancel(record)"
        >
          <a-switch
            checked-children="✓"
            un-checked-children="X"
            :checked="switchStatus[record.id]"
            @change="handleChangeOnConfirm(record)"
          />
        </a-popconfirm>
      </template>
      <template v-else-if="column.key === 'actions'">
        <div>
          <a :href="'/menu-items/' + record.id">Detail </a>
          <RightSquareOutlined style="color: #3098fe" />
          <span> |</span>
          <a :href="'/menu-items/' + record.id + '/edit'"> Edit </a>
          <EditOutlined style="color: #dbb12f" />
        </div>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import {menuItemStore} from "@/stores/menuItemStore"
import {RightSquareOutlined, EditOutlined} from "@ant-design/icons-vue"
import {useDateOptions} from "@/utils"
import "./style.css"

export default defineComponent({
  components: {
    RightSquareOutlined,
    EditOutlined
  },
  setup() {
    const store = menuItemStore()
    const data = ref([])
    const switchStatus = ref([false])
    const formatDate = useDateOptions
    let confirmTriggered = false
    const imageErrors = ref([])

    const handleImageError = recordId => {
      imageErrors.value.push(recordId)
    }
    const confirm = (record: any) => {
      switchStatus.value[record.id] = !switchStatus.value[record.id]
      confirmTriggered = true
    }

    const cancel = () => {
      confirmTriggered = false
    }

    const handleChangeOnConfirm = () => {
      if (confirmTriggered) {
        confirmTriggered = false
      }
    }
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
      await store.fetchMenuItem()
      const items: items[] = store.getMenuItem

      data.value = items.map(item => {
        return {
          id: item._id,
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
      useDateOptions,
      confirm,
      cancel,
      switchStatus,
      handleChangeOnConfirm,
      imageErrors,
      handleImageError
    }
  }
})
</script>
