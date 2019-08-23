import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import user from './module/user'
import app from './module/app'
import container from './module/container'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
// console.debug('store> debug:%o', debug)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    container
  },
  strict: debug, // 是否开启严格模式
  plugins: debug ? [createLogger()] : []
})
