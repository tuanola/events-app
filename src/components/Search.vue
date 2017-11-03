<template>
  <div class="searchbox">
    <form id="search" @submit.prevent="emitSearchEvent()">
      <div class="row">
        <div class="col-md-7"><input name="query" v-model="searchQuery" @keyup="updateFilter()" class="form-control" placeholder="Event or person you are looking for"></div>
        <div class="col-md-3"><input name="location" v-model="searchLocation" @keyup="updateFilter()" class="form-control" placeholder="Where"></div>
        <div class="col-md-2"><a href="#" class="btn btn-primary" @click="updateFilter()">Search</a></div>
      </div>
    </form>
  </div>
</template>

<style>
</style>

<script>
  import { SET_FILTER_CONDITIONS } from '../store/mutation-types'

  export default {
    data: function () {
      return {
        searchQuery: '',
        searchLocation: ''
      }
    },
    methods: {
      updateFilter () {
        this.$store.commit(SET_FILTER_CONDITIONS, { what: this.searchQuery, where: this.searchLocation })
      }
    }
  }
</script>
