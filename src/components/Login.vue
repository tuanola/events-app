<template>
  <b-navbar-nav>
    <b-nav-item>
      <a href="#" class="nav-link" v-show="isLoggedIn()" @click="handleLogout()">Log Out</a>
      <a href="#"  class="nav-link" v-show="!isLoggedIn()" @click="handleLogin()">Log In</a>
    </b-nav-item>
  </b-navbar-nav>
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
