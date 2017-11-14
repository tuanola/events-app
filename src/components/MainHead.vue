<template>
  <div class="mainheader">
    <h1>Volta ao Mundo</h1>
    <p class="lead">Find Capoeira Angola event near you or plan your trip to learn and play capoeira!</p>
    <search></search>
  </div>
</template>

<style>
  .mainheader {
    padding-top: 80px;
  }
</style>

<script>
  import search from '../components/Search.vue'

  export default {
    components: {
      search
    }
  }
</script>
