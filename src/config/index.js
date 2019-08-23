import envModel from '../../config/prod.env'
const env = envModel.NODE_ENV

export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description adfs 开发环境 跳转url地址
   */
  adfsDevJumpUrl: 'https://stscn.lenovo.com/adfs/ls/IdpInitiatedSignOn.aspx?loginToRp=https://pfmdev.earth.xpaas.lenovo.com/api/open/auth/adfs',
  /**
   * @description adfs 生产环境 跳转url地址
   */
  adfsProdJumpUrl: 'https://stscn.lenovo.com/adfs/ls/IdpInitiatedSignOn.aspx?loginToRp=https://covoice.lenovo.com/adfs/api/open/auth/',
  /**
   * @description 测试token
   */
  testToken: 'eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJEU1NGQVdEV0FEQVMuLi4iLCJzdWIiOiJ7XCJmaXJzdG5hbWVcIjpcIlpoaUh1aVwiLFwiSVRjb2RlXCI6XCJmYW56aDdcIixcImVtYWlsXCI6XCJmYW56aDdAbGVub3ZvLmNvbVwiLFwibGFzdG5hbWVcIjpcIkZhblwifSIsInVzZXJfbmFtZSI6ImFkbWluIiwibmlja19uYW1lIjoiREFTREExMjEiLCJleHAiOjE1NDI4NTAyNTcsImlhdCI6MTU0Mjc2Mzg1NywianRpIjoiMTU0Mjc2Mzg1NzgxMiJ9.o8s9V4oPDYOzlIualiE6BdjWKPVZ7rUHFJJNd5BteFA',
  /*
  * @functionalteambasedsurvey: 导航路径配置：
  */
  menuUrlConfig: {
    eeHome: env === 'development' ? '/#/home' : '/home',
    eeDashboard: env === 'development' ? '/functionalteambasedsurvey/#/functionalteambasedsurvey/dashboard' : '/functionalteambasedsurvey/dashboard',
    functionalRankPage: env === 'development' ? '/functionalteambasedsurvey/#/functionalteambasedsurvey/index' : '/functionalteambasedsurvey/index',
    projectRankPage: env === 'development' ? '/projectteambasedsurvey/#/projectteambasedsurvey/index' : '/projectteambasedsurvey/index',
    systemSurvey: env === 'development' ? '/systemsurvey/#/systemsurvey/index' : '/systemsurvey/index',
    systemSurveyStartPage: env === 'development' ? '/systemsurvey/#/systemsurvey/survey/startSurvey' : '/systemsurvey/survey/startSurvey',
    systemSurveyCreatePage: env === 'development' ? '/systemsurvey/#/systemsurvey/survey/create' : '/systemsurvey/survey/create',
    projectDashboard: env === 'development' ? '/projectteambasedsurvey/#/projectteambasedsurvey/dashboard' : '/projectteambasedsurvey/dashboard',
    adminHome: env === 'development' ? '/#/useradmin' : '/useradmin',
    closeloop: env === 'development' ? '/systemsurvey/#/systemsurvey/closeloop/summary-list' : '/systemsurvey/closeloop/summary-list'
  },
  /**
   * templateListBaseUrl
   */
  templateListBaseUrl: env === 'development' ? 'https://pfmdev.lenovo.com' : window.location.origin,
  /**
   * @description 问卷item默认数据
   */
  itemDefault: {
    id: '',
    title: 'Questionnaire title',
    prefix: 'Thank you for filling out this Questionnaire. It will take you 3~5 minutes to complete.',
    projectId: '',
    suffix: 'Acknowledgments',
    overview: '',
    interview: '',
    createDate: 0,
    updateTime: 0,
    purpose: '',
    createdBy: '',
    updateBy: '',
    status: '',
    userGroup: '',
    converts: '',
    urlLink: '',
    circulation: '',
    email: '',
    isLogin: '0',
    pid: '',
    cust_scale_type_list: []
    // cust_scale_type_list: [{
    //   scale_name: 'Agree - Disagree (5 levels)',
    //   choices: ['Agree Strongly', 'Agree', 'Neither Agree nor Disagree', 'Disagree', 'Disagree Strongly']
    // }]
  }
}
