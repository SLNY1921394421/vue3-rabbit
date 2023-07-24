import { computed, ref } from "vue";
import { defineStore} from 'pinia'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

// useCartStore
// 购物车
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  const cartList = ref([])

  // 获取最新购物车列表action
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  // 添加购物车操作
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if(isLogin.value) {
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
      // 已添加过 - count + 1
      // 没有添加过 - 直接push
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if(item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }
  }
  // 删除购物车
  const delCart = async (skuId) => {
    if(isLogin.value) {
      // 调用接口实现接口购物车中的删除功能
      await delCartAPI([skuId])
      updateNewList()
    } else {
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }
  // 单选
  const singleSelected = (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  
  const allCheck = (selected) => {
    cartList.value.forEach((item) => {
      item.selected = selected
    })
  }
  // 清空购物车
  const clearCart = () => {
    cartList.value = []
  }


  //  计算属性
  // 1. 总的数量 所有项的count之和
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  // 2. 总价 所有项的count*price之和
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  // 全选
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  // 3. 已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c)=> a + c.count * c.price, 0 ))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleSelected,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice,
    clearCart,
    updateNewList,
  }
}, {
  persist: true
})