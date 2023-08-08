import { ref } from 'vue'
import { defineStore } from "pinia"
import { getCategoryAPI } from '@/apis/layout'

// 使用pinia优化导航列表逻辑，因为有个滚动后粘贴在顶部的导航与导航一样，会调取两次接口
export const useCategoryStore = defineStore('category', () => {
    // 导航列表逻辑
    const categoryList = ref([])
    const category = async () => {
        const {data: res} = await getCategoryAPI()
        categoryList.value = res.result
    }
    return {
        categoryList,
        category,
    }
})