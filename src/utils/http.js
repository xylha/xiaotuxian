import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'


const httpAxios = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

// axios 请求拦截器
httpAxios.interceptors.request.use(config => {
    // 为当前请求配置Token字段
    /* config.headers.Authorization = 'Bearer xxx'
    console.log('config', config) */
    // 1. 从Pinia里获取用户数据
    const userStore = useUserStore()
    const token = userStore.userData.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}` // 刷新shuju?
    }
    return config
}, e => Promise.reject(e))

httpAxios.interceptors.response.use(res => { // res => res.data, 就不用每个接口都{ data: res }了 
    return res
}, e => {
    // 统一错误提示
    ElMessage({
        type: 'error',
        message: e.response.data.message
    })
    // 拦截接口401
    if (e.response.status === 401) {
        const userStore = useUserStore()
        userStore.clearUserInfo()
        const router = useRouter()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default httpAxios