<template>
  <div class="searchbox">
    <form id="search" @submit.prevent="emitSearchEvent()">
      <div class="row">
        <div class="col-md-7"><input name="query" v-model="query" class="form-control" placeholder="Event or person you are looking for"></div>
        <div class="col-md-3"><input name="location" v-model="location" class="form-control" placeholder="Where"></div>
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
    computed: {
      query: {
        get () {
          return this.$store.state.filterConditions.what
        },
        set (value) {
          this.commitFilter(value, this.location)
        }
      },
      location: {
        get () {
          return this.$store.state.filterConditions.where
        },
        set (value) {
          this.commitFilter(this.query, value)
        }
      }
    },
    methods: {
      updateFilter () {
        this.commitFilter(this.query, this.location)
      },
      commitFilter (what, where) {
        this.$store.commit(SET_FILTER_CONDITIONS, { what, where })
      }
    }
  }
</script>
