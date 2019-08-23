import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/view/login/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
