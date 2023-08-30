import { defineStore } from 'pinia'
import axios from 'axios'
import { message } from 'ant-design-vue';


export const categoryListStore = defineStore("user", {
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
                const data = await axios.get('http://localhost:5001/categories')
                this.categories = data.data
            }
            catch (error) {
                message.error('Data Baseye Not Connected');
            }
        }
    },
})