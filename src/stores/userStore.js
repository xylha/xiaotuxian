// 管理用户数据
import { defineStore } from "pinia";
import { ref } from "vue";
import { userLogin } from '@/apis/user'
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/apis/cart";

/**
 * 一个函数形式
 * usexxStore命名
 * defineStore定义，两个参数
 * 抛出所需要的函数或数据
 */
export const useUserStore = defineStore('userStore', () => {
    const useCart = useCartStore()
    const userData = ref({})
    const getUserInfo = async ({
        account,
        password
    }) => {
        const {data: res} = await userLogin({
            account,
            password,
        })
        userData.value = res.result
        console.log('sss', userData.value)
        // 合并购物车
        mergeCartAPI(useCart.cartData.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        useCart.updateCart()
    }

    // 退出时清空用户信息
    const clearUserInfo = () => {
        userData.value = {}
        useCart.clearCart()
    }
    return {
        userData,
        getUserInfo,
        clearUserInfo
    }
    },
 // 新增配置项，Pinia数据持久化
{
    persist: true,
})