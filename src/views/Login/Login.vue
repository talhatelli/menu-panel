<template>
  <div class="login-form">
    <div class="login-form-wrapper">
      <h1>Login</h1>
      <input v-model="email" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import {loginStore} from "@/stores/loginStore"
import {useRouter} from "vue-router"
import "./style.css"

export default defineComponent({
  components: {},
  setup() {
    const store = loginStore()
    const email = ref("")
    const password = ref("")
    const router = useRouter()

    const login = async () => {
      const formData = {
        email: email.value,
        password: password.value
      }
      await store.fetchLogin(formData)
      await router.push("/menu-items")
      await location.reload()
    }

    return {
      email,
      password,
      login
    }
  }
})
</script>
