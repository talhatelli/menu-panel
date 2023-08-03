<template>
  <a-table :columns="columns" :data-source="data" style="height: 100vh;">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
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
    const getUsers = ref([]);
    const users = ref([]);
    const data = ref([]);
    onMounted(async () => {
      const users = await store.fetchUsers();
      data.value = users.map((item, index) => {
        return {
          key: (index + 1).toString(),
          name: item.name,
          age: item.age,
          address: item.address,
          tags: item.tags,
        };
      });
    });

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'PRICE',
        dataIndex: 'address',
        key: 'address 1',
        ellipsis: true,
      },
      {
        title: 'DATE',
        dataIndex: 'address',
        key: 'address 2',
        ellipsis: true,
      },
      {
        title: 'STATUS',
        dataIndex: 'address',
        key: 'address 3',
        ellipsis: true,
      },
      {
        title: 'ACTIONS',
        dataIndex: 'address',
        key: 'address 4',
        ellipsis: true,
      },
    ];

    // const data = [
    //   {
    //     key: '1',
    //     name: "sdesfbcfdf",
    //     age: 32,
    //     address: 'New York',
    //     tags: ['nice', 'developer'],
    //   },
    //   {
    //     key: '2',
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. Park',
    //     tags: ['loser'],
    //   },
    //   {
    //     key: '3',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. Park',
    //     tags: ['cool', 'teacher'],
    //   },
    // ];

    return {
      columns,
    };
  },
});
</script>