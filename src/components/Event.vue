<template>
  <div class="event">
    <spinner v-show="showLoader"></spinner>
    <div>
      <span v-for="person in event.people" class="person badge">
        {{ person }}
      </span>
    </div>
    <div class="container">
      <div class="card-body row">
        <div class="col-md-9" v-html="event.description.text">
        </div>
        <div class="col-md-3">
          <h4>Contacts:</h4>
          <div><a :href="event.facebook">facebook</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  img {
    width: 100%;
    height: auto;
  }
  .nav-link {
    cursor: pointer;
  }
  .event div {
    padding: 10px;
  }
  .event-info {
    padding-top: 20px;
  }
  .dates div{
    margin: 0;
    padding: 0;
  }
  .date {
    font-size: 1.1rem;
    color: #666666;
  }
  .fromNow {
    font-size: 0.9rem;
  }
  .place {
    font-size: 1.1rem;
  }
</style>

<script>
  import dateMethods from '../mixins/dateMethods'
  import Spinner from 'vue-simple-spinner'

  export default {
    mixins: [dateMethods],
    components: {
      Spinner
    },

    created () {
      if (this.event === {} || !this.event.name) {
        this.$store.dispatch('eventById', this.$route.params['id'])
      }
    },
    computed: {
      event () {
        return this.$store.getters.eventById(this.$route.params['id'])
      },
      showLoader () {
        return this.$store.state.showLoader
      }
    },

    methods: {
      getImage (fileName) {
        if (fileName) {
          console.log('fileName', fileName)
          import(`../uploads/images/events/${fileName}`)
          return `../dist/${fileName}`
        }
      }
    },
    watch: {
      '$route' (to, from) {
        this.id = to.params.id
      }
    }
  }
</script>
