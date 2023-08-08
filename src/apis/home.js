import httpAxios from '@/utils/http'

/**
 * @description 获取轮播图数据
 * @returns {*}
 */
export function getHomeBannerAPI(params = {}) {
    // 传参默认是 '1'
    const { distributionSite = '1' } = params
    return httpAxios({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })   
}

/**
 * @description 获取新鲜好物
 * @returns 新鲜好物信息
 */
export const findNewAPI = () => {
    return httpAxios({
        url: '/home/new'
    })
}

/**
 * @description 获取人气推荐
 * @returns {*}
 */
export const findHotAPI = () => {
    return httpAxios({
        url: '/home/hot'
    })
}

/**
 * @description 获取商品列表
 * @returns {*}
 */
export const findProductAPI = () => {
    return httpAxios({
        url: '/home/goods'
    })
}