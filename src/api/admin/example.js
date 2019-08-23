import axios from '@/libs/api.request'

// get 例子
export const getGroupsInfo = (params) => {
  return axios.request({
    url: 'v1/api/pme/get_groups',
    params: params,
    method: 'get'
  })
}

// post 例子
export const postSample = (params) => {
  return axios.request({
    url: 'post_sample_url',
    data: params,
    method: 'post'
  })
}
