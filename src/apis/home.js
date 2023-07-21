import httpInstance from "@/utils/http"

export const bannerAPI = () => {
  return httpInstance({
    url: 'home/banner'
  })
}