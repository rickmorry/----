import axios from 'axios'
/**
 * 创建你axios实例
 */
const instance = axios.create({
  baseURL: 'http://steam.zheyousoft.cn/', // api的base_url
  timeout: 10000, // 请求超时时间
  withCredentials: false, //跨域请求时发送cookies
  // transformRequest: data => qs.stringify(data) //
})

/**
 * request拦截器
 */
instance.interceptors.request.use(
  e => {
    e.params = e.params || {}
    e.headers = e.headers || {}
    //set 默认值
    return e
  },
  error => ({ status: 0, msg: error.message })
)

/**
 * respone拦截器
 */
instance.interceptors.response.use(
  response => {
    const resp = response.data
    if (response.status === 200) {
      return resp
    }
    return "错误"
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default instance