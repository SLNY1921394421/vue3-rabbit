<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'
// 触发导航列表的action
const categoryStore = useCategoryStore()
onMounted( ()=>categoryStore.getCategory())
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <!-- 路有缓存：当路由的path一样参数不同时，会直接复用路由对应的组件 -->
  <!-- 1.给RouterView添加key破坏缓存 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>@/stores/categoryStore