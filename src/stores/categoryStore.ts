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
                message.error('Database Not Connected');
            }
        }
    },
})