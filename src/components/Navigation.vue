<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">Volta ao Mundo</b-navbar-brand>
    <b-navbar-toggle target="navbarResponsive"></b-navbar-toggle>
    <b-collapse is-nav id="navbarResponsive">
      <b-navbar-nav class="mr-auto">
         <b-nav-item>
           <router-link to="/about" class="nav-link">About</router-link>
         </b-nav-item>
         <b-nav-item>
           <router-link to="/contacts" class="nav-link">Contact</router-link>
         </b-nav-item>
        </b-navbar-nav>
        <login></login>
    </b-collapse>
  </b-navbar>
</template>

<script>
    import Login from '../components/Login.vue'

    export default {
      components: {
        Login
      }
    }
</script>
