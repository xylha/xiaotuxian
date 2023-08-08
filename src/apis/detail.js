import httpAxios from "@/utils/http";

export const getDetail = (id) => {
    return httpAxios({
        url: '/goods',
        params: {
            id
        }
    })
}

export const getDetailHotGoods = ({id, type, limit =  3}) => {
    return httpAxios({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}