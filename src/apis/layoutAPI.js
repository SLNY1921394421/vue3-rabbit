import httpInstance from '@/utils/http'
const getCategoryAPI = () => {
  return httpInstance({
    url: '/home/category/head',
  })
}

export default getCategoryAPI