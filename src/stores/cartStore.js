// 购物车数据
import { defineStore } from "pinia";
import { computed, ref,watch } from "vue";
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartAPI, delCartData } from "@/apis/cart";

export const useCartStore = defineStore('cart', () => {
    const users = useUserStore()
    const isLogin = computed(() => users.userData.token)
    // 购物车数据
    const cartData = ref([])
    // const cartGoodsCount = ref(0) // 数量（二）

    // 增加与删除购物车调接口都需要这两步，抽离出来(更新购物车)
    const updateCart = async () => {
        const { data: res } = await findNewCartAPI()
        cartData.value = res.result
    }
    // 购物车操作--加
    const addCart = async (good) => {
        if (isLogin.value) {
            // 登录之后加入购物车逻辑
            const { skuId, count } = good
            await insertCartAPI({ skuId, count })
            updateCart()
        } else {
            console.log('good', good)
            // 增加购物车
            // 在原有的数据中查找是否已经加入过该商品，如果加了数量加一，如果没有，push
            const item = cartData.value.find(item => good.skuId === item.skuId )
            if (item) {
                item.count++
                // cartGoodsCount.value++
            } else {
                cartData.value.push(good)
                // cartGoodsCount.value += good.count
            }
        }
        
    }
    // 购物车操作--删除
    const delCart = async (id) => {
        if (isLogin.value) {
            // 删除购物车接口
            await delCartData([id])
            updateCart()
        } else {
            const newCart = cartData.value.filter(item => {
                /* if (item.skuId === id) {
                    cartGoodsCount.value -= item.count
                } */
                return item.skuId !== id
            })
            cartData.value = newCart  
        }
        
    }

    // 清空购物车
    const clearCart = () => {
        cartData.value = []
    }
   const all = computed(() => cartData.value.reduce((a, c) => a + c.count, 0))

   const cartGoodsPrice = computed(() => {
        return cartData.value.reduce((prev, cur) => prev + cur.count * cur.price, 0)
   })

   // 单个商品选择
   const isGoodsSelect = (id, val) => {
    cartData.value.map(item => {
        if (item.id === id) {
          return item.selected = val
        }
      })
   }

   // 全选商品
   const selectAll = (val) => {
        cartData.value.map(item => item.selected = val)
   }

   const isSelect = computed(() => {
    // every 用于检测是否所有元素都满足条件，如果有一个不满足，返回false，并且不往下执行
        return cartData.value.every(item => item.selected)
   })

   // 选择数量
   const goodsSelect = computed(() => {
    let count = 0
    cartData.value.forEach(p => {
        if (p.selected) {
            count += p.count
        }
    })
    return count
   })
   // 选择商品总价
   const goodsAllPrice = computed(() => {
    let price = 0
    cartData.value.forEach(p => {
        
        if (p.selected) {
             price += p.price * p.count
        }
    })
    return price
   })

    return {
        cartData,
        addCart,
        delCart,
        // cartGoodsCount,
        cartGoodsPrice,
        all,
        isGoodsSelect, // 单个选择
        selectAll, // 全选
        clearCart,
        updateCart,
        isSelect,
        goodsSelect,
        goodsAllPrice
    }
},{
    persist: true
})