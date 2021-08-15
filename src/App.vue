<template>
  <div id="app">
    <navigation></navigation>
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
        <p class="m-0 text-center text-white">Copyright © Volta ao Mundo 2021</p>
      </div>
    </footer>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style>
  .content {
    min-height: 400px;
    padding-top: 30px;
  }
</style>