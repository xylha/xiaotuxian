import httpAxios from '@/utils/http'
export const userLogin = ({
    account,
    password
}) => {
    console.log('account', account)
    console.log('password', password)
    return httpAxios({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password,
        }
    })
}

export const getLikeListAPI = ({limit = 4}) => {
    return httpAxios({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}