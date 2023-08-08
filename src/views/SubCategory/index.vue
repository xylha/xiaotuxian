<script setup>
import { getCategoryFilterAPI, postCategoryGoods } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const subCategoryList = ref([])
const route = useRoute()

const getSubCategory = async () => {
    const { data: res } = await getCategoryFilterAPI(route.params.id)
    subCategoryList.value = res.result
}
onMounted(() => {
    getSubCategory()
    postGoodsList()
})

// 下拉滚动的数据
const subGoodsList = ref([])
// 接口传参
const subGoodsData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const postGoodsList = async () => {
  const { data: res } = await postCategoryGoods(subGoodsData.value)
  subGoodsList.value = res.result.items
}

// Tab选中的值
const tabChange = () => {
  postGoodsList()
}
const disabled = ref(false)
// 加载更多列表数据
const load = async () => {
  subGoodsData.value.page++
  const { data: res } = await postCategoryGoods(subGoodsData.value)
  subGoodsList.value = [...subGoodsList.value, ...res.result.items]

  if (res.result.items.length === 0) {
    // 禁止监听滚动
    disabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: `/category/${ subCategoryList.parentId }`}">{{ subCategoryList.parentName }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="subGoodsData.sortField" @tab-change="tabChange" >
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" 
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
          <GoodsItem v-for="good in subGoodsList" :goods="good" :key="good.id"/>
        
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
  position: relative;
  
    
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    :deep(.prodCont) {
      margin-bottom: 10px;
    }
    :deep(.prodCont:hover) {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
    :deep(p) {
      width: 206px;
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    :deep(img){
      width: 206px;
      height: 206px;
    }
    :deep(.price) {
      color: $priceColor;
    }
     
  }


  /* .goods-item {
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
  } */

  /* .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  } */
}
</style>