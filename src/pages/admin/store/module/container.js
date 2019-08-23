import {
  getGroupsInfo
} from '@/api/admin/example.js'

export default {
  state: {
    groupingInfo: {}
  },
  getters: {
    getGroupingInfo: state => {
      return state.groupingInfo
    }
  },
  mutations: {
    setGroupingInfo (state, groupInfo) {
      state.groupingInfo = groupInfo
    }
  },
  actions: {
    // get_groups
    getGroupsInfo ({state, commit}, param) {
      return new Promise((resolve, reject) => {
        getGroupsInfo(param).then(res => {
          // commit('setGroupingInfo', res.data)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }

  }
}
