import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
// import store from '_admin/store'
import iView from 'iview'
// import { getToken } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
