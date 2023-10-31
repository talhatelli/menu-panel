import { defineStore } from 'pinia'
import axios from 'axios';
import { message } from 'ant-design-vue';
import  ENDPOINTS  from './endpoints';

export const categoryStore = defineStore("categoryStore", {
    state: () => ({
        categories: [],
        categoryDetail:[]
    }),
    getters: {
        getCategories(state) {
            return state.categories
        },
        getCategoryDetail(state) {
            return state.categoryDetail
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
                await axios.post(ENDPOINTS.categories, formData).then(()=>
                message.success("Added Successfully"));
            } catch (error) {
                message.error('Database Not Connected');
            }
        },
        async fetchCategoryDetail(itemId: any){
            const { data } = await axios.get(`${ENDPOINTS.categories}/${itemId}/items`);
            this.categoryDetail = data
        }, 
        async deleteCategoryItem(itemId: any){
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