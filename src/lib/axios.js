import axios from 'axios'
import { baseUrl } from '@/config'
class HttpRequest {
  constructor(options) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  interceptors(instance, url) {
    // 响应拦截器
    instance.interceptors.request.use(
      config => {
        // 添加全局 loading
        if (!Object.keys(this.queue).length) {
          // Spin.show()
        }
        this.queue[url] = url
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 请求拦截器
    instance.interceptors.response.use(
      res => {
        delete this.queue[url]
        // console.log(res)
        const { data } = res
        return data
      },
      error => {
        delete this.queue[url]
        return Promise.reject(error)
      }
    )
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
