import axios from 'axios'
import { getToken } from '@/utils/auth'
import store from '../store'

const service = axios.create({
  bakseURL: 'localhost:3000',
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 在请求之前检查token
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // 请求错误时操作
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    // 通过res.code来处理未成功返回操作 (未成功 return Promise.reject(new Error(res.message || 'Error'))
    return response.data
  },
  error => {
    console.log('err', +error)
    return Promise.reject(error)
  }
)

export default service
