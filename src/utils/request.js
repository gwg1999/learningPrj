import axios from "axios";
import storage from './storage'

const request = axios.create({
  baseURL: './api',
  withCredentials: true,
  timeout: 20000,
})

/**
 * 设置请求通用配置，包括token信息等。
 */
request.interceptors.request.use(
  config => {
    config.headers['access_token'] = storage.get("access_token")
    return config
  }
)

export default request

