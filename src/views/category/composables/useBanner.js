// 封装banner相关业务代码
import { bannerAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'

export const useBanner = () => {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await bannerAPI({ distributionSite: '2' })
    bannerList.value = res.result
  }
  onMounted(() => {
    getBanner()
  })
  return {
    bannerList,
  }
}