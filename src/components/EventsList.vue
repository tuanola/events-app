<template>
  <div class="events-list">
    <h2>{{ pageTitle }} ({{ filteredList.length }})<small class="filter-condition" v-if="haveCondition('filterKey')" @click="removeCondition('what')">{{ filterKey }}</small><small class="filter-condition" v-if="haveCondition('filterLocation')" @click="removeCondition('where')">{{ filterLocation }}</small></h2>
    <spinner v-show="showLoader"></spinner>
    <div v-for="item in filteredList" class="row event card card-body">
      <div class="row">
        <div class="col-md-5">
          <img :src="getImage(item.picture.main.url)" width="337" height="200">
        </div>
        <div class="col-md-7 event-info">
          <div class="row">
            <div class="col-md-8 event-dates">{{ parseDate(item.date.start) }} - {{ parseDate(item.date.end) }}</div>
            <div class="col-md-4 event-place">{{ item.place.city }}, {{ item.place.country }}</div>
          </div>
          <router-link :to="'/event/' + item._id"> <h3 class="event-name card-title">{{ item.name }}</h3> </router-link>
          <span v-for="person in item.people" class="person badge">
            {{ person }}
          </span>
          <div v-html="truncate(item.description.text, 280)" class="event-description card-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .events-list {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .filter-condition {
    color: #666666;
    padding-left: 10px;
  }
  .filter-condition::after {
    content: "\00d7";
    font-size: 1.1rem;
    line-height: 2.2;
    vertical-align: top;
    cursor: pointer;
  }
  .events-list .event {
    margin-top: 20px;
    padding-top: 20px;
    adding-bottom: 20px;
  }
  .events-list .event:hover {
    background-color: #fff8c6;
  }

  .events-list a {
    text-decoration: none;
    color: #212529;
  }
  .events-list .event h3 {
    font-size: 1.35rem;
    padding-top: 40px;
  }
  .event-info {
    padding-top: 0;
  }
  .event-dates, .event-place {
    font-size: 1.1rem;
  }
  .event-name:hover {
    text-decoration: underline;
  }
  .event-description {
    padding-top: 20px;
  }
</style>

<script>
  import dateMethods from '../mixins/dateMethods'
  import { REMOVE_CONDITION } from '../store/mutation-types'
  import Spinner from 'vue-simple-spinner'

  export default {
    mixins: [dateMethods],
    components: {
      Spinner
    },

    computed: {
      list () {
        return this.$store.getters.allEvents
      },
      showLoader () {
        return this.$store.state.showLoader
      },
      filteredList () {
        const filterKey = this.filterKey && this.filterKey.toLowerCase()
        const filterLocation = this.filterLocation && this.filterLocation.toLowerCase()
        let list = this.$store.getters.allEvents
        if (filterKey) {
          list = list.filter((row) =>
            Object.keys(row).some((key) =>
              String(row[key]).toLowerCase().indexOf(filterKey) > -1
            )
          )
        }
        if (filterLocation) {
          list = list.filter((row) =>
            Object.keys(row.place).some((key) =>
              String(row.place[key]).toLowerCase().indexOf(filterLocation) > -1
            )
          )
        }
        return list
      },
      pageTitle () {
        return (this.filterKey || this.filterLocation) ? 'Filtered events ' : 'All upcoming events '
      },
      filterKey () {
        return this.$store.state.filterConditions.what
      },
      filterLocation () {
        return this.$store.state.filterConditions.where
      }
    },

    // Fetches events when the component is created
    created () {
      if (this.list.length === 0) {
        this.$store.dispatch('allEvents')
      }
    },

    methods: {
      truncate (string, value) {
        let res = string
        if (string.length > value) {
          res = string.substring(0, value) + '...'
        }
        return res
      },
      getImage (fileName) {
        import(`../uploads/images/events/${fileName}`)
        return `../dist/${fileName}`
      },
      haveCondition (name) {
        return this[name] !== ''
      },
      removeCondition (key) {
        this.$store.commit(REMOVE_CONDITION, key)
      }
    }
  }
</script>
