import { defineStore } from 'pinia'
import axios from 'axios';
import { message } from 'ant-design-vue';
import  ENDPOINTS  from './endpoints';

export const categoryStore = defineStore("categoryStore", {
    state: () => ({
        categories: [],
    }),
    getters: {
        getCategories(state) {
          return [...state.categories].reverse();
        }
    },
    actions: {
        async fetchCategories() {
            try {
                const {data}= await axios.get(ENDPOINTS.categories)
                this.categories = data
            }
            catch (error) {
                message.error('Data Baseye Not Connected');
            }
        },
        async newCategory(formData: object) {
            try {
                await axios.post(ENDPOINTS.categories, formData)
                message.success("Added Successfully")
            } catch (error) {
                message.error('Database Not Connected');
            }
        }
    },
})