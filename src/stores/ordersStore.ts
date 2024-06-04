import { defineStore } from 'pinia'
import axios from 'axios'
import { message } from 'ant-design-vue';
import ENDPOINTS from './endpoints';


interface OrderList {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  note:string;
  count:number;
}
export const ordersStore = defineStore("ordersStore", {
  state: () => ({
    orderList: {} as OrderList,
  }),
  getters: {
    getOrdersList(state) {
      return state.orderList
    },
  },
  actions: {
    async fetchOrdersList() {
      try {
        // const token = localStorage.getItem("token");
        const { data } = await axios.get<OrderList[]>(ENDPOINTS.orders
        //     , {
        //   headers: {
        //       Authorization: `Bearer ${token}`
        //   } 
        // }
    );
        this.orderList = data;
      }
      catch (error) {
        message.error('Data Baseye Not Connected');
      }
    },
    async fetchUpdateOrderStatus(itemId: string) {
        try {
          // const token = localStorage.getItem("token");
           await axios.put<OrderList[]>(`${ENDPOINTS.orders}/${itemId}`);
        }
        catch (error) {
          message.error('Data Baseye Not Connected');
        }
      },
      async fetchDeletedOrder(itemId: string) {
        try {
          // const token = localStorage.getItem("token");
          const response = await axios.delete<OrderList[]>(`${ENDPOINTS.orders}/${itemId}`);
          message.error(response.data.message);

        }
        catch (error) {
          message.error('Data Baseye Not Connected');
        }
      }
  },
})