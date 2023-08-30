import { defineStore } from 'pinia'
import axios from 'axios'
import { message } from 'ant-design-vue';


export const menuItemListStore = defineStore("user", {
  state: () => ({
    menuItems: [],
  }),
  getters: {
    getMenuItem(state) {
      return state.menuItems
    }
  },
  actions: {
    async fetcMenuItem() {
      try {
        const data = await axios.get('http://localhost:5001/menu-items')
        this.menuItems = data.data
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    }
  },
})