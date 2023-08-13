<template>
  <a-table :columns="columns" :data-source="data" style="height: 100vh;">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'imageUrl'">
        <img :src="record.imageUrl" class="table-image">
      </template>
      <template v-else-if="column.key === 'name'">
      </template>
      <template v-else-if="column.key === 'price'">
      </template>
      <template v-else-if="column.key === 'date'">
        <a-timeline>
          <a-timeline-item color="green">
            Created <br />
            {{ formatDate(record.date) }}</a-timeline-item>
          <a-timeline-item>
            Update<br />
            <p> {{ formatDate(record.updatedAt) }}</p>
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
import { defineComponent, onMounted, ref } from "vue";
import { menuItemListStore } from "../stores/menuItemListStore";

export default defineComponent({
  setup() {
    const store = menuItemListStore();
    const data = ref([]);
    const formatDate = (data) => {
      const options = {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
      };
      return new Date(data).toLocaleDateString(undefined, options);
    };

    onMounted(async () => {
      await store.fetchUsers();
      const users = store.getUsers;
      data.value = users.map((user) => {
        return {
          name: user.name,
          address: user.description,
          price: user.price,
          date: user.createdAt,
          updatedAt: user.updatedAt,
          status: user.isDeleted,
          actions: 'detail edit',
          imageUrl: user.imageUrl,
        };
      });
    });

    const columns = [
      {
        dataIndex: "imageUrl",
        key: "imageUrl",
        scopedSlots: { customRender: 'imageSlot' },
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        scopedSlots: { customRender: 'nameSlot' },
      },
      {
        title: "PRICE",
        dataIndex: "price",
        key: "price",
        ellipsis: true,
      },
      {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
        ellipsis: true,
      },
      {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'status',
        ellipsis: true,
      },
      {
        title: 'ACTIONS',
        dataIndex: 'actions',
        key: 'actions',
        ellipsis: true,
      },
    ];

    return {
      columns,
      data,
      formatDate
    };
  },
});
</script>

<style>
.table-image {
  display: block;
  object-fit: cover;
  margin: 0 auto;
  width: 150px;
  height: 100px;
  border-radius: 5%;
}
</style>