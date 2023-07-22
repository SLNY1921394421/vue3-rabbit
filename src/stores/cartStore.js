import { ref } from "vue";
import { defineStore} from 'pinia'

// useCartStore
// 购物车
export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const addCart = (goods) => {
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if(item) {
      item.count++
    } else {
      cartList.value.push(goods)
    }
  }
  return {
    cartList,
    addCart,
  }
}, {
  persist: true
})