import Home from '@/view/admin/home'
import Login from '_admin/login/login.vue'

export default [
  {
    path: '/admin/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin/home',
    name: 'adminHome',
    component: Home
  }
]
