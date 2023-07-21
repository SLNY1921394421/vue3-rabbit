<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
// 触发导航列表的action
const categoryStore = useCategoryStore()
onMounted( ()=>categoryStore.getCategory())
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <RouterView />
  <LayoutFooter />
</template>