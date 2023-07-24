<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/categoryAPI'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import GoodsItem from '../home/components/GoodsItem.vue'

const route = useRoute()
const filterDate = ref({})
const getFilterData = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  filterDate.value = res.result
}
onMounted(() => getFilterData())

// 获取分类基础列表
const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  soreField: 'publishTime',
})
const getGoodList = async() => {
  const res = await getSubCategoryAPI(reqData)
  goodList.value = res.result.items
}
onMounted(() => getGoodList())

// tab切换
const tabChange = () => {
  getGoodList()
  reqData.page = 1
}
// 无限滚动
const disable = ref(false)
const load = async () => {
  reqData.page++;
  const res = await getSubCategoryAPI(reqData)
  goodList.value = [...goodList, ...res.result.items]
  if(res.result.items.length === 0) {
    disable.value = true
  }
}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterDate.parentId}` }">
          {{ filterDate.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterDate.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.soreField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disable">
        <!-- 商品列表-->
        <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>