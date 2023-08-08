import httpAxios from "@/utils/http";

/**
 * @description 会员中心-订单数据
 * @param {*} 
 *  params: {
 *      orderState: 0,
 *      page: 1,
 *      pageSize: 2
 *  }
 * @returns 
 */
export const getUserOrderAPI = (params) => {
    return httpAxios({
        url: '/member/order',
        method: 'GET',
        params
    })
}