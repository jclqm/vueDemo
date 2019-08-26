import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
// import store from '_admin/store'
import iView from 'iview'
import { getToken } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})
const LOGIN_PAGE_NAME = 'login'

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  console.log(token, to.name)
  if (to.name === 'error_401' || to.name === 'error_404' || to.name === 'error_500') {
    next()
  }
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next()
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: 'adminHome' // 跳转到home页
    })
  } else if (token && to.name !== LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next()
  }
})

router.afterEach(route => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
