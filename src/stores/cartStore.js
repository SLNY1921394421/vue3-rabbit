import { computed, ref } from "vue";
import { defineStore} from 'pinia'

// useCartStore
// 购物车
export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  // 添加购物车操作
  const addCart = (goods) => {
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if(item) {
      item.count++
    } else {
      cartList.value.push(goods)
    }
  }
  // 删除购物车
  const delCart = (skuId) => {
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx, 1)
  }
  //  计算属性
  // 1. 总的数量 所有项的count之和
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  // 2. 总价 所有项的count*price之和
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
  }
}, {
  persist: true
})