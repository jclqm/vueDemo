import Axios from 'axios'
import baseURL from '_conf/url'
import { Message } from 'iview'
import Cookies from 'js-cookie'
import { TOKEN_KEY } from '@/libs/util'
import qs from 'qs'

class httpRequest {
  constructor () {
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {}
  }
  // 销毁请求实例
  destroy (url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }
  // 请求拦截
  interceptors (instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      // 增加权限模拟,从url中截获itcode放到请求中去
      let getUrlItcode = qs.parse(window.location.href.split('?')[1])
      if (config.url.includes('/api')) {
        // config.headers['x-access-token'] = Cookies.get(TOKEN_KEY)
        // using JWT
        config.headers.authorization = 'Bearer ' + Cookies.get(TOKEN_KEY)
        // config.headers['Cache-Control'] = 'no-cache'
        // config.headers['Pragma'] = 'no-cache'
      }
      // Spin.show()
      // 在发送请求之前做些什么,添加时间戳解决浏览器读取缓存问题
      if (config.method === 'post' || config.method === 'delete' || config.method === 'put') {
        if (getUrlItcode.itcode) {
          config.data = {
            ...config.data,
            _t: Date.parse(new Date()) / 1000,
            itcode: getUrlItcode.itcode
          }
        } else {
          config.data = {
            ...config.data,
            _t: Date.parse(new Date()) / 1000
          }
        }
        config.data = qs.stringify(config.data)
      }
      if (config.method === 'get') {
        if (getUrlItcode.itcode) {
          config.params = {
            itcode: getUrlItcode.itcode,
            _t: Date.parse(new Date()) / 1000,
            ...config.params
          }
        } else {
          config.params = {
            _t: Date.parse(new Date()) / 1000,
            ...config.params
          }
        }
      }
      return config
    }, error => {
      // 对请求错误做些什么
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use((res) => {
      let { data } = res
      const is = this.destroy(url)
      if (!is) {
        setTimeout(() => {
          // Spin.hide()
        }, 500)
      }
      if (!(data instanceof Blob)) {
        // 返回值异常判断，我们的接口一般不太规范，所以此处不太好启用
        // if (data.code !== 200) {
        //   // 后端服务在个别情况下回报201，待确认
        //   if (data.code === 401) {
        //     Cookies.remove(TOKEN_KEY)
        //     window.location.href = '/#/login'
        //     Message.error('未登录，或登录失效，请登录')
        //   } else {
        //     if (data.msg) Message.error(data.msg)
        //   }
        //   return false
        // }
        // 此处仅保留返回的code不为'0'时统一给予错误提示
        if (parseInt(data.code) !== 0 && data.msg) {
          Message.error({
            content: data.msg,
            duration: 0,
            closable: true
          })
        }
      }
      // baidu tongji's code
      // if (_hmt) {
      //   _hmt.push(['_trackEvent', 'ajax', url])
      //   // console.debug('_hmt> _trackEvent ajax url:%o', url)
      // }
      return data
    }, (error) => {
      let str = error + ''
      if (str.search('timeout') !== -1) { // 超时error捕获
        Message.error('The request timeout')
      } else {
        Message.error('服务内部错误')
      }
      // 对响应错误做点什么
      return Promise.reject(error)
    })
  }
  // 创建实例
  create () {
    let conf = {
      baseURL: baseURL,
      timeout: 120000,
      headers: {
        // 'Content-Type': 'application/json; charset=utf-8',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-URL-PATH': location.pathname
      }
    }
    return Axios.create(conf)
  }
  // 合并请求实例
  mergeReqest (instances = []) {
    //
  }
  // 请求实例
  request (options) {
    var instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}
export default httpRequest
