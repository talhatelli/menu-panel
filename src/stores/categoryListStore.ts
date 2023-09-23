import { defineStore } from 'pinia'
import axios from 'axios';
import { message } from 'ant-design-vue';
import  ENDPOINTS  from './endpoints';

export const category = defineStore("category", {
    state: () => ({
        categories: [],
    }),
    getters: {
        getCategories(state) {
            return state.categories
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
        async newCategory(formData: any) {
            try {
                await axios.post(ENDPOINTS.categories, formData);
            } catch (error) {
                message.error('Database Not Connected');
            }
        }
    },
})
