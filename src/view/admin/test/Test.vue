<template>
  <div>
    <p>test</p>
    <h4>参数</h4>
    <p>page: {{page}}</p>
    <p>status: {{status}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: '',
      status: ''
    }
  },
  computed: {
  },
  watch: {
    $route (to, from) {
      if ((to.query.page && to.query.page !== this.page) || (to.query.status && to.query.status !== this.status)) {
        this.page = to.query.page
        this.status = to.query.status
        this.getData()
      }
    }
  },
  methods: {
    getData () {
      console.log('发请求')
    }
  },
  created () {
    this.page = this.$route.query.page
    this.status = this.$route.query.status
    if (this.page || this.status) {
      this.getData()
    }
  }
}
</script>
