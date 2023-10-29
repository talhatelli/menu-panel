import { defineStore } from 'pinia'
import axios from 'axios'
import { message } from 'ant-design-vue';
import  ENDPOINTS  from './endpoints';


export const menuItemStore = defineStore("menuItemStore", {
  state: () => ({
    menuItems: [],
    menuItemDetail:[],
    menuItemPrice:[],
  }),
  getters: {
    getMenuItem(state) {
      return state.menuItems
    },
    getMenuItemDetail(state) {
      return state.menuItemDetail
    },
    getMenuItemPrice(state) {
      return state.menuItemPrice
    },
  },
  actions: {
    async fetchMenuItem() {
      try {
        const {data}= await axios.get(ENDPOINTS.menuItems)
        this.menuItems = data
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    },
    async newMenuItem(formData: any) {
      try {
        const { data } = await axios.post(ENDPOINTS.menuItems, formData);
      } 
      catch (error: any) {
        if (error.response && error.response.data && error.response.data.errors) {
          const errorMessages = error.response.data.errors;
          const errorMessageString = errorMessages.join(', ').toLowerCase();
          message.error(errorMessageString);
        } else {
          message.error('Database Not Connected');
        }
      }
    },
    async fetchMenuItemDetail(itemId: any){
        const { data } = await axios.get(`${ENDPOINTS.menuItems}/${itemId}`);
        this.menuItemDetail = data
    },
    async fetchMenuItemPrice(itemId: any){
        const { data } = await axios.get(`${ENDPOINTS.menuItems}/${itemId}/price-history`);
        this.menuItemPrice = data
    }, 
    async deleteMenuItem(itemId: any){
      try {
        const response = await axios.delete(`${ENDPOINTS.menuItems}/${itemId}`);
        message.error(response.data.message);
      } 
      catch (error: any) {
        message.error('Database Not Connected');
      }
    }
    
  },
})