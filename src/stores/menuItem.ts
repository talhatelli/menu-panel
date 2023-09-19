import { defineStore } from 'pinia'
import axios from 'axios'
import { message } from 'ant-design-vue';
import  ENDPOINTS  from './endpoints';


export const menuItem = defineStore("menu-item", {
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
        const {data}= await axios.get(ENDPOINTS.menuItems)
        this.menuItems = data
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    },
    async newMenuItem(formData) {
      try {
        const { data } = await axios.post(ENDPOINTS.menuItems, formData);
      } 
      catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          const errorMessages = error.response.data.errors;
          const errorMessageString = errorMessages.join(', ').toLowerCase();
          message.error(errorMessageString);
        } else {
          message.error('Database Not Connected');
        }
      }
    },
  },
})