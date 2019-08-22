<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card icon="log-in" title="Welcome to login Admin" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
// import { getDashboardSummaryList } from '@/api/user'
// import { setToken, getToken } from '@/libs/util'
// import config from '@/config'

export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'getCurrentUserInfo',
      'handleLogin'
    ]),
    handleSubmit ({ userName, password }) {
      console.debug('handleSubmit> userName:%o, password:%o', userName, password)
      this.adminReqPostLogin(userName, password)
      // const testToken = config.testToken
      // setToken(testToken)
      // this.getCurrentUserData()
    },
    init () {
      let mainLoginUrl = '../union/login' + '?loginFrom=../admin/login'
      location.assign(encodeURI(mainLoginUrl))
    },
    getCurrentUserData () {
      let that = this
      // that.$router.push({
      //   name: 'home'
      // })
      this.getCurrentUserInfo().then((res) => {
        console.log('getCurrentUserData> res:%o', res)
        that.$router.push({
          name: 'template_manage'
        })
      }, (err) => {
        console.log('getCurrentUserData> err:%o', err)
        that.$Message.error(err.msg)
        that.$router.push({name: 'error_401'})
      })
    },
    adminReqPostLogin (username, password) {
      console.debug('username:%o, password:%o', username, password)
      let param = {
        username: username,
        password: password
      }
      this.handleLogin(param).then(res => {
        console.debug('res:%o', res)
        if (parseInt(res.code) === 0) {
          this.getCurrentUserData()
        }
      }, err => {
        console.error('err:%o', err)
      })
    }
  },
  mounted () {
    // const host = window.location.host
    // if (host.indexOf('localhost') === -1) {
    //   const token = getToken()
    //   if (!token) {
    //     this.init()
    //   } else {
    //     this.getCurrentUserData()
    //   }
    // }
  }
}
</script>

<style>

</style>
