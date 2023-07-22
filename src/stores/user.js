import { loginAPI } from '@/apis/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    // @TODO
    userInfo.value = res.data.result
  }
  return {
    userInfo,
    getUserInfo,
  }
}, {
  persist: true,
})