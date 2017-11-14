<template>
  <div class="row event-header">
    <div class="col-md-6"><img :src="getImage(event.picture.main.url)" width="337" height="210" class="event-header-image"></div>
    <div class="col-md-6 event-title">
      <h1>
        {{ event.name }}
      </h1>
      <div class="row">
        <div class="col-md-6">
          <div>{{ parseDate(event.date.start) }} - {{ parseDate(event.date.end) }}</div>
          <div class="header-datefromnow">{{ parseDateFromNow(event.date.start, event.date.end) }}</div>
        </div>
        <div class="col-md-6">
          <span v-if="event.place.space">{{ event.place.space }}, </span>
          <span>{{ event.place.city }}, </span>
          <span>{{ event.place.country }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .event-header {
    font-size: 1rem;
  }
  .event-header-image {
    max-height: 380px;
  }
  .event-title {
    padding-top: 60px;
    padding-bottom: 20px;
  }
  .header-datefromnow {
    font-size: 0.9rem;
  }
</style>

<script>
  import dateMethods from '../mixins/dateMethods'

  export default {
    mixins: [dateMethods],

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
    }
  }
</script>
