import httpAxios from "@/utils/http";

/**
 * @description 加入购物车接口
 * @param {*} param0 
 * @returns 
 */
export const insertCartAPI = ({
    skuId,
    count
}) => {
    // 加入购物车
    return httpAxios({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

/**
 * @description 获取购物车最新列表
 * @returns 
 */
export const findNewCartAPI = () => {
    return httpAxios({
        url: '/member/cart'
    })
}

/**
 * @description 删除购物车
 * @returns 
 */
export const delCartData = (ids) => {
    return httpAxios({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

/**
 * @description 合并本地购物车到服务器
 * @param {*} data 
 * @returns 
 */
export const mergeCartAPI = (data) => {
    return httpAxios({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })
}
