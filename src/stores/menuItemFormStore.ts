import { defineStore } from 'pinia'
import axios from 'axios'
import { message } from 'ant-design-vue';
import ENDPOINTS from './endpoints';


export const menuItemFormStore = defineStore("user", {
    state: () => ({
        menuItems: [],
    }),
    getters: {
        getMenuItem(state) {
            return state.menuItems
        }
    },
    actions: {
        async NewMenuItem(formData) {
            try {
                const { data } = await axios.post(ENDPOINTS.menuItems, formData);
                this.menuItems = data;
            } catch (error) {
                if (error.response && error.response.data && error.response.data.errors) {
                    const errorMessages = error.response.data.errors;
                    const errorMessageString = errorMessages.join(', ').toLowerCase();
                    message.error(errorMessageString);
                } else {
                    message.error('Data Baseye Not Connected');
                }
            }
        }
    },
})