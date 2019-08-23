import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
// import { getTableData } from './data'
// analysis相关
// import { getAnaUserInfo, getSurveyList, saveSurveyList, updateSurveyList, delSurveyList } from './_le/se'

// index 相关
// import { getIndUserInfo } from './_le/pme'
// import { getRankingInfo, getCurrentUserInfo } from './_le/ee/data'

// admin 登录相关和获取用户信息
Mock.mock(/\/v2\/api\/user\/login/, login)
Mock.mock(/\/v2\/api\/user\/get_info/, getUserInfo)
Mock.mock(/\/v2\/api\/user\/logout/, logout)

// Mock.mock(/\/v1\/api\/get_userinfo/, getCurrentUserInfo)

// index 相关
// Mock.mock(/\/asw\/sample/, getIndUserInfo)
// Mock.mock(/\/v1\/api\/pme\/get_ranking/, getRankingInfo)

export default Mock
