import { defineStore } from 'pinia'
import axios from 'axios';
import { message } from 'ant-design-vue';
import ENDPOINTS from './endpoints';

export const categoryStore = defineStore("categoryStore", {
    state: () => ({
        categories: [],
        categoryDetail:[]
        categoryItem: {},
    }),
    getters: {
        getCategories(state) {
            return [...state.categories].reverse();
        },
        getCategoryItem(state) {
            return state.categoryItem

        getCategoryDetail(state) {
            return state.categoryDetail
        }
    },
    actions: {
        async fetchCategories() {
            try {
                const { data } = await axios.get(ENDPOINTS.categories)
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
        },
        async updateCategory(payload: object, itemId: number) {
            await axios.put(`${ENDPOINTS.categories}/${itemId}`, payload);
        },
        async fetchCategoryItem(itemId: number) {
            const { data } = await axios.get(`${ENDPOINTS.categories}/${itemId}`);
            this.categoryItem = data
        },
        async fetchCategoryDetail(itemId: number){
            const { data } = await axios.get(`${ENDPOINTS.categories}/${itemId}/items`);
            this.categoryDetail = data
        }, 
        async deleteCategoryItem(itemId: number){
            try {
              const response = await axios.delete(`${ENDPOINTS.categories}/${itemId}`);
              message.error(response.data.message); 
            } 
            catch (error: any) {
              message.error(error.response.data.error);
            }
          }
    },
})