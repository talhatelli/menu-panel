<template>
  <a-table class="table" :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'imageUrl'">
        <img
          class="table-image"
          :src="record.imageUrl"
          @error="handleImageError(record.id)"
          v-if="!imageErrors.includes(record.id)"
        />
        <img
          class="error-image"
          src="/src/assets/icons/no-picture-taking.png"
          v-else
        />
      </template>
      <template v-else-if="column.key === 'name'">{{ record.name }}</template>
      <template v-else-if="column.key === 'note'">{{ record.note }}</template>
      <template v-else-if="column.key === 'table'">{{ record.table }}</template>
      <template v-else-if="column.key === 'date'">
        <a-timeline>
          <a-timeline-item color="green">
            Created <br />
            {{ formatDate(record.date) }}
          </a-timeline-item>
        </a-timeline>
      </template>
      <template v-else-if="column.key === 'status'">
        <div class="edit">
          <a-button class="button" @click="handelStatus(record.id)" type="primary" >Ready</a-button>
        </div>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ordersStore} from "@/stores/ordersStore";
import { RightSquareOutlined, EditOutlined } from "@ant-design/icons-vue";
import { useDateOptions } from "@/utils";
import "./Getting.css";

export default defineComponent({
  components: {
    RightSquareOutlined,
    EditOutlined,
  },
  setup() {
    const store = ordersStore();
    const data = ref([]);
    const formatDate = useDateOptions;
    let confirmTriggered = false;
    const imageErrors = ref([]);

    const handleImageError = (recordId) => {
      imageErrors.value.push(recordId);
    };
    const handelStatus = async (recordId) => {
      await store.fetchUpdateOrderStatus(recordId)
      window.location.reload(); 
    };
    const confirm = async (record) => {
      record.isActive = !record.isActive;
      await store.updateMenuItemIsActive(record.id, record.isActive);
      confirmTriggered = true;
    };

    const cancel = () => {
      confirmTriggered = false;
    };

    const handleChange = (record) => {
      if (confirmTriggered) {
        confirmTriggered = false;
      }
    };

    onMounted(async () => {
      await store.fetchOrdersList();
      const items = store.getOrdersList;

      data.value = items.filter((item) => item.status === "getting_ready") 
    .map((item) => ({
      id: item._id,
      name: item.name,
      note: item.note,
      table: item.table,
      date: item.createdAt,
      status: item.status,
      imageUrl: item.imageUrl,
      count: item.count,
    }));
    });

    const columns = [
      {
        dataIndex: "imageUrl",
        key: "imageUrl",
        scopedSlots: { customRender: "imageSlot" },
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        scopedSlots: { customRender: "nameSlot" },
      },
      {
        title: "Note",
        dataIndex: "note",
        key: "note",
        scopedSlots: { customRender: "nameSlot" },
      },
      {
        title: "Table",
        dataIndex: "table",
        key: "table",
        ellipsis: true,
      },
      {
        title: "DATE",
        dataIndex: "date",
        key: "date",
        ellipsis: true,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        ellipsis: true,
      },
    ];

    return {
      columns,
      data,
      formatDate,
      useDateOptions,
      confirm,
      cancel,
      handleChange,
      imageErrors,
      handleImageError,
      handelStatus
    };
  },
});
</script>
