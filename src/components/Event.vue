<template>
  <div class="event">
      <div>
          <span v-for="person in event.people" class="person badge">
            {{ person }}
          </span>
      </div>
      <div class="container">
        <div v-html="event.description.text" class="card-body">
        </div>
      </div>
      <div class="clearfix" style="clear:both"></div>
      <div>
        Links:
        <div><a :href="event.facebook">facebook</a></div>
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

  export default {
    mixins: [dateMethods],

    created () {
      if (this.event === {} || !this.event.name) {
        this.$store.dispatch('eventById', this.$route.params['id'])
      }
    },
    computed: {
      event () {
        return this.$store.getters.eventById(this.$route.params['id'])
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
