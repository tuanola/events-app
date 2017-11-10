<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">Volta ao Mundo</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contacts" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>
      </div>
    </nav>

    <header class="bg-primary text-white">
      <div class="container text-center">
        <router-view name="top"></router-view>
      </div>
    </header>
    <div class="content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright © Volta ao Mundo 2017</p>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .content {
    min-height: 400px;
    padding-top: 30px;
  }
</style>