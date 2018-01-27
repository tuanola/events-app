<template>
</template>

<script>
import { getUser, setIdToken, setAccessToken } from '../auth/AuthService'
export default {
  name: '',
  mounted () {
    getUser()
    this.$nextTick(() => {
      setAccessToken()
      setIdToken()
      window.location.href = '/'
    })
  }
}
</script>
