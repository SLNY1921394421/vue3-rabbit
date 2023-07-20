/* 基础配置通常包括：

1. 实例化 - baseURL + timeout
2. 拦截器 - 携带token 401拦截等 */
// import axios from "axios";
import axios from "axios";


const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
});

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default httpInstance


