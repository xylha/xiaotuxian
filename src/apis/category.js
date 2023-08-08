import httpAxios from "@/utils/http";

/**
 * @description 获取一级菜单数据
 * @param {*} id 商品传参 
 * @returns 
 */
export const getCategoryAPI = (id) => {
    return httpAxios({
        url: '/category',
        params: {
            id,
        }
    })
}

/**
 * @description 获取二级分类商品数据
 * @param {*} id 
 * @returns 
 */
export const getCategoryFilterAPI = (id) => {
    return httpAxios({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

/**
 * @description 获取二级菜单中向下滚动的商品数据
 * @param {*} data 
 * @returns 
 */
export const postCategoryGoods = (data) => {
    return httpAxios({
        url: '/category/goods/temporary',
        method: "POST",
        data
    })
}