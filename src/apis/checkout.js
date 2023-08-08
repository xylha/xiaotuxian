import httpAxios from "@/utils/http";

/**
 * @description 获取结算页详情信息接口
 * @returns 
 */
export const getCheckInfoAPI = () => {
    return httpAxios({
        url: '/member/order/pre'
    })
}

/**
 * @description 创建订单
 * @param {*} data 
 * @returns 
 */
export const createOrderAPI = (data) => {
    return httpAxios({
        url: '/member/order',
        method: 'POST',
        data
    })
}