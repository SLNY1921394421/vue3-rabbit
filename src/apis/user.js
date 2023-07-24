// 封装所有和用户相关的接口函数
import request from '@/utils/http'
import axios from 'axios'

export const loginAPI = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

// export const loginAPI = (() => {
//   return axios.get('/MOCK_USER.json')
// })


export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}