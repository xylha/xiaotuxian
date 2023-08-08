import httpAxios from "@/utils/http";

/**
 * @description 结算
 * @param {*} id 
 * @returns 
 */
export const getOrderAPI = (id) => {
    return httpAxios({
        url: `/member/order/${id}`
    })
}