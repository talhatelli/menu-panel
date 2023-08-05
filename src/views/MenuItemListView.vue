<template>
  <a-table :columns="columns" :data-source="data" style="height: 100vh;">
    <template #imageSlot="{ record }">
      <div>
        <img :src="record.imageUrl" alt="Image" width="50" height="50" />
      </div>
    </template>
    <template #nameSlot="{ text }">
      <div class="name-cell">
        {{ text }}
      </div>
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

    onMounted(async () => {
      await store.fetchUsers();
      const users = store.getUsers;
      data.value = users.map((user) => {
        return {
          name: user.name,
          address: user.description,
          price: user.price,
          date: user.createdAt,
          status: user.isDeleted ? 'Deleted' : 'Active',
          actions: 'detail edit',
          imageUrl: user.imageUrl,
        };
      });
    });

    const columns = [
      {
        dataIndex: "imageUrl",
        key: "image",
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
        key: "address 1",
        ellipsis: true,
      },
      {
        title: 'DATE',
        dataIndex: 'date',
        key: 'address 2',
        ellipsis: true,
      },
      {
        title: 'STATUS',
        dataIndex: 'status',
        key: 'address 3',
        ellipsis: true,
      },
      {
        title: 'ACTIONS',
        dataIndex: 'actions',
        key: 'address 4',
        ellipsis: true,
      },
    ];

    return {
      columns,
      data,
    };
  },
});
</script>

<style>
.name-cell {
  color: blue;
  font-size: large;
}
</style>