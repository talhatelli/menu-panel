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
      return [...state.menuItems].reverse();
    },
    getMenuItemDetail(state) {
      return state.menuItemDetail
    },
    getMenuItemPrice(state) {
      return [...state.menuItemPrice].reverse();
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
    async newMenuItem(formData: object) {
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
    async fetchMenuItemDetail(itemId: number){
      try {
        const { data } = await axios.get(`${ENDPOINTS.menuItems}/${itemId}`);
        this.menuItemDetail = data
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    },
    async fetchMenuItemPrice(itemId: number){
      try {
        const { data } = await axios.get(`${ENDPOINTS.menuItems}/${itemId}/price-history`);
        this.menuItemPrice = data
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    }, 
    async deleteMenuItem(itemId: number){
        const response = await axios.delete(`${ENDPOINTS.menuItems}/${itemId}`);
        if (response) {
          message.error(response.data.message);
        } else {
          message.error('Database Not Connected');
        }
    }
    
  },
})