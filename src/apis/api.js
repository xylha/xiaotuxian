import httpAxios from '@/utils/http'

export function getxx() {
    httpAxios({
        url: 'home/category/head'
    })
}