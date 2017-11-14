import moment from 'moment'

export default {
  methods: {
    parseDate (date) {
      return moment(date).format('DD MMM YYYY', 'en')
    },
    parseDateFromNow (start, end) {
      return (moment(start).diff(moment()) > 0) ? `starts ${moment(start).fromNow()}` : `ends ${moment(end).fromNow()}`
    }
  }
}
