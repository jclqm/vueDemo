import axios from '@/libs/api.request'

export const login = (params) => {
  return axios.request({
    url: '/v2/api/user/login',
    data: params,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/v2/api/user/get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: '/v2/api/user/logout',
    params: {
      token
    },
    method: 'post'
  })
}

// get 例子
export const getDashboardSummaryList = (params) => {
  return axios.request({
    url: '/v1/api/dashboard/summary/list',
    params: params,
    method: 'get'
  })
}

export const getCurrentUserInfo = (params) => {
  return axios.request({
    url: '/v1/api/get_userinfo',
    params: params,
    method: 'get'
  })
}
