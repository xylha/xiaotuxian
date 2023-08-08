<script setup>

/* import { onMounted, ref } from 'vue';
import { getCategoryAPI } from '@/apis/layout';
import { RouterLink } from 'vue-router';

const categoryList = ref([])
const getCategort = async () => {
    const {data: res} = await getCategoryAPI()
    categoryList.value = res.result
    console.log(categoryList)
}

// 调接口
onMounted(() => {
  getCategort()  
}) */
// 直接使用pinia的数据
import { useCategoryStore } from '@/stores/catrgoryStore';
const categoryStore = useCategoryStore()

</script>
<template>
    <ul class="app-header-nav">
        <!-- <li class="home" v-for="item in categoryList" :key="item.id"> -->
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
            <!-- <p>{{ item.name }}</p> -->
        </li>
    </ul>
</template>

<style lang="scss">
.app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
        margin-right: 40px;
        width: 38px;
        text-align: center;

        a {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            display: inline-block;

            &:hover {
                color: $xtxColor;
                border-bottom: 1px solid $xtxColor;
            }
        }

        .active {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
        }
    }
}
</style>