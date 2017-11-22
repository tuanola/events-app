<template>
  <div>
    <button class="btn btn-danger log" v-show="isLoggedIn()" @click="handleLogout()">Log Out </button>
    <button class="btn btn-info log" v-show="!isLoggedIn()" @click="handleLogin()">Log In</button>
  </div>
</template>

<script>
  import { isLoggedIn, login, logout } from '../auth/AuthService'

  export default {
    methods: {
      handleLogin () {
        login()
      },
      handleLogout () {
        logout()
      },
      isLoggedIn () {
        return isLoggedIn()
      }
    }
  }
</script>
