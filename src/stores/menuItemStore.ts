import { defineStore } from 'pinia'
import axios from 'axios'
import { message } from 'ant-design-vue';
import ENDPOINTS from './endpoints';

interface Category {
  _id: string;
  name: string;
}
interface MenuItemDetail {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  categories: Category[];
}
interface PriceHistoryItem {
  _id: string;
  price: number;
}
interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}
export const menuItemStore = defineStore("menuItemStore", {
  state: () => ({
    menuItems: [] as MenuItem[],
    menuItemDetail: {} as MenuItemDetail,
    menuItemPrice: [] as PriceHistoryItem[],
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
        const token = localStorage.getItem("token");
        const { data } = await axios.get<MenuItem[]>(ENDPOINTS.menuItems, {
          headers: {
              Authorization: `Bearer ${token}`
          } 
        });
        this.menuItems = data;
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    },
    async newMenuItem(formData: object) {
      try {
        const token = localStorage.getItem("token");

          await axios.post(ENDPOINTS.menuItems, formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
          });
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
    async fetchMenuItemDetail(itemId: string) {
      try {
        const { data } = await axios.get<MenuItemDetail>(`${ENDPOINTS.menuItems}/${itemId}`);
        this.menuItemDetail = data;
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    },
    async fetchMenuItemPrice(itemId: string) {
      try {
        const { data } = await axios.get<PriceHistoryItem[]>(`${ENDPOINTS.menuItems}/${itemId}/price-history`);
        this.menuItemPrice = data;
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    },
    async deleteMenuItem(itemId: string) {
      const response = await axios.delete(`${ENDPOINTS.menuItems}/${itemId}`);
      if (response) {
        message.error(response.data.message);
      } else {
        message.error('Database Not Connected');
      }
    },
    async updateMenuItem(formData: object, itemId: string) {
      try {
        const { data } = await axios.put(`${ENDPOINTS.menuItems}/${itemId}`, formData);
        if (data) {
          message.success('Update Successful');
        }
      }
      catch (error: any) {
        message.error('Database Not Connected');
      }
    },

  },
})