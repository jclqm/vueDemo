<template>
  <div>
    <p>test</p>
    <h4>参数</h4>
    <p>page: {{page}}</p>
    <p>status: {{status}}</p>
    <CustomList :list="list"></CustomList>
  </div>
</template>

<script>
import CustomList from '@/components/custom-list'
export default {
  components: {
    CustomList
  },
  data () {
    return {
      page: '',
      status: '',
      list: [{
          name: '经济',
          children: [{
            name: '如家',
            children: [{
              name: '长江路-如家'
            }, {
              name: '望江路-如家'
            }]
          }, {
            name: '7天',
            children: [{
              name: '长江路-7天'
            }, {
              name: '望江路-7天'
            }]
          }]
      }]
    }
  },
  computed: {},
  watch: {
    $route (to, from) {
      if (
        (to.query.page && to.query.page !== this.page) ||
        (to.query.status && to.query.status !== this.status)
      ) {
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
