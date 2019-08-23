'use strict'
const env = require('./prod.env')

// 因目前项目使用的接口均不支持跨域，所以此处无法直接使用，需要通过Nginx来做代理使用。
const DEV_URL = '/' // 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/'
const PRO_URL = '/'

export default env.NODE_ENV === 'development' ? DEV_URL : PRO_URL
