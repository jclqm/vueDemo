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
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getDashboardSummaryList = (params) => {
  return axios.request({
    url: '/v1/api/dashboard/summary/list',
    params: params,
    method: 'get'
  })
}

export const getSurveyList = (params) => {
  return axios.request({
    url: '/v2/api/analysis/surveys',
    params: params,
    method: 'get'
  })
}

export const getSurveySummary = (params) => {
  return axios.request({
    url: '/v2/api/analysis/summary',
    params: params,
    method: 'get'
  })
}

export const getQuestionDetails = (params) => {
  return axios.request({
    url: '/v2/api/analysis/q_detail',
    params: params,
    method: 'get'
  })
}

export const getDoubleDetailsQuestionAxios = (params) => {
  return axios.request({
    url: 'v2/api/double/details',
    params: params,
    method: 'get'
  })
}

export const getDaubleDetailDataAxios = (params) => {
  return axios.request({
    url: '/v2/api/analysis/cross_chart',
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
