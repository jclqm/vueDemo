import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Login from '@/view/login/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Test',
      component: Test
    }
  ]
})
