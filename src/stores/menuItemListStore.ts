import { defineStore } from 'pinia'
import axios from 'axios'

export const menuItemListStore = defineStore("user", {
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers(state) {
      return state.users
    }
  },
  actions: {
    async fetchUsers() {
      try {
        const data = await axios.get('http://localhost:5001/menu-items')
        this.users = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
})