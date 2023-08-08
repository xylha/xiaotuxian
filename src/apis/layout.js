import httpAxios from '@/utils/http'

export function getCategoryAPI() {
    return httpAxios({
        url: '/home/category/head'
    })
}