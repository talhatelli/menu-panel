import { defineStore } from 'pinia'
import axios from 'axios';
import { message } from 'ant-design-vue';
import ENDPOINTS from './endpoints';

export const categoryStore = defineStore("categoryStore", {
    state: () => ({
        categories: [],
        categoryDetail: [],
        categoryItem: {},
    }),
    getters: {
        getCategories(state) {
            return [...state.categories].reverse();
        },
        getCategoryItem(state) {
            return state.categoryItem
        },
        getCategoryDetail(state) {
            return state.categoryDetail
        }
    },
    actions: {
        async fetchCategories() {
            try {
                const token = localStorage.getItem("token");
                const { data } = await axios.get(ENDPOINTS.categories, {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                this.categories = data
            }
            catch (error) {
                message.error('Data Baseye Not Connected');
            }
        },
        async newCategory(formData: object) {
            try {

                const token = localStorage.getItem("token");

                await axios.post(ENDPOINTS.categories, formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                message.success("Added Successfully")
            } catch (error) {
                message.error('Database Not Connected');
            }
        },
        async updateCategory(payload: object, itemId: string) {
            await axios.put(`${ENDPOINTS.categories}/${itemId}`, payload);
        },
        async fetchCategoryItem(itemId: string) {
            const { data } = await axios.get(`${ENDPOINTS.categories}/${itemId}`);
            this.categoryItem = data
        },
        async fetchCategoryDetail(itemId: string) {
            const { data } = await axios.get(`${ENDPOINTS.categories}/${itemId}/items`);
            this.categoryDetail = data
        },
        async deleteCategoryItem(itemId: string) {
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