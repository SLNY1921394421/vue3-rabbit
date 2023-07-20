import httpInstance from "@/utils/http";

const getCategory = () => {
  return httpInstance({
    url: 'home/category/head',
  })
}

export default getCategory