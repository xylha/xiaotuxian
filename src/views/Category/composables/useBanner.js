// 轮播图逻辑
import { ref, onMounted  } from 'vue'
import { getHomeBannerAPI } from '@/apis/home'
export function useBanner() {
    const bannerList = ref([])
    const getBannerList = async() => {
        const {data: res} = await getHomeBannerAPI({
            distributionSite: '2'
        })
        bannerList.value = res.result
    }
    onMounted(() => {
        getBannerList()
    })
    return {
        bannerList
    }
}