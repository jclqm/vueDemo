import { login, logout, getUserInfo } from '@/api/admin/user'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: [],
    hasGetInfo: false,
    permissions: []
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setPermissions (state, permissions) {
      state.permissions = permissions
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, {username, password}) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        }).then(res => {
          const data = res.data
          commit('setToken', data.token)
          // 同时更新用户数据
          commit('setAvator', data.avator)
          commit('setUserName', data.user_name)
          commit('setUserId', data.user_id)
          commit('setAccess', data.access)
          commit('setPermissions', data.permissions)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('setToken', '')
          commit('setAccess', [])
          commit('setPermissions', [])
          resolve()
        }).catch(err => {
          reject(err)
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(res => {
          const data = res.data
          commit('setAvator', data.avator)
          commit('setUserName', data.user_name)
          commit('setUserId', data.user_id)
          commit('setAccess', data.access)
          commit('setPermissions', data.permissions)
          commit('setHasGetInfo', true)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
