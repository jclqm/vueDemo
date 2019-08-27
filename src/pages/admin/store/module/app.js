import {
  getMenuByRouter,
  localRead
} from '@/libs/util'
import routers from '_admin/router/routers'

export default {
  state: {
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    local: localRead('local'),
    errorList: [],
    hasReadErrorPage: false
  },
  getters: {
    menuList: (state, getters, rootState) => {
      console.log(state, getters, rootState)
      return getMenuByRouter(routers, rootState.user.access)
    }
  },
  mutations: {

  }
}
