// 商品部分业务逻辑
import { getCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
export function useCategory() {
    const categoryList = ref([])
    const route = useRoute()
    const getCategoryList = async (id) => {
        const {data: res} = await getCategoryAPI(id)
        categoryList.value = res.result
    }
    onBeforeRouteUpdate((to) => {
        getCategoryList(to.params.id)
    })
    onMounted(() => {
        getCategoryList(route.params.id)
    })
    return {
        categoryList
    }
}