<template>
  <div class="event">
    <h1> {{ event.name }}</h1>
    <div class="row event-info">
      <div class="col-md-5">
        <img :src="getImage(event.picture.main.url)" width="337" height="210">
      </div>
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-8 dates">
            <div class="date">
              <strong>{{ parseDate(event.date.start) }} - {{  parseDate(event.date.end) }}</strong>
            </div>
            <div class="fromNow">{{ parseDateFromNow(event.date.start, event.date.end) }}</div>
          </div>
          <div class="col-md-4 place">
            <span v-if="event.place.space">{{ event.place.space }},</span>
            <span>{{ event.place.city }}, </span>
            <span>{{ event.place.country }} </span>
          </div>
        </div>
          <span v-for="person in event.people" class="person badge">
            {{ person }}
          </span>
      </div>
      <div >
        <div v-html="descrActiveLang.text" class="card-body">
        </div>
      </div>
      <div class="clearfix" style="clear:both"></div>
      <div>
        Links:
        <div><a :href="event.facebook">facebook</a></div>
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
  import moment from 'moment'

  export default {
    props: {
      list: Array
    },
    data () {
      return {
        id: this.$route.params.id
      }
    },
    computed: {
      event () {
        const id = this.id
        const list = this.$props.list
        let eventItem
        if (id) {
          eventItem = list.find((item) => item._id === id)
        }
        return eventItem
      },
      descrActiveLang: {
        get () {
          return this.event.description.find((item) => item.main === true)
        }
      }
    },

    methods: {
      getImage (fileName) {
        import(`../uploads/images/events/${fileName}`)
        return `/dist/${fileName}`
      },
      parseDate (date) {
        return moment(date).format('DD MMM YYYY')
      },
      parseDateFromNow (start, end) {
        return (moment(start).diff(moment()) > 0) ? `starts ${moment(start).fromNow()}` : `ends ${moment(end).fromNow()}`
      },
      isActiveLang (lang) {
        return lang === this.descrActiveLang.lang
      }
    },
    watch: {
      '$route' (to, from) {
        this.id = to.params.id
      }
    }
  }
</script>
