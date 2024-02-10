import { defineStore } from 'pinia'
import axios from 'axios';
import { message } from 'ant-design-vue';
import ENDPOINTS from './endpoints';

export const loginStore = defineStore("loginStore", {
    state: () => ({
        login: {
            token: localStorage.getItem('token') || '',
        },
      }),
    getters: {
        getCategories(state) {
            return state.login.token
        },
    },
    actions: {
        async fetchLogin(formData: object) {
            try {
                const { data } = await axios.post(`${ENDPOINTS.login}/login`,formData)
                this.login = data 
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', data.user.email);
            }
            catch (error) {
                message.error('Data Baseye Not Connected');
            }
        },
    },
})