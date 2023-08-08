import { createRouter, createWebHashHistory } from "vue-router";
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Layout from '@/views/Layout/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home,
                },
                {
                    path: 'category/:id',
                    component: Category
                },
                {
                    path: 'category/sub/:id',
                    component: SubCategory
                },
                {
                    path: 'detail/:id',
                    component: Detail
                },
                {
                    path: 'checkout',
                    component: Checkout
                },
                {
                    path: 'pay',
                    component: Pay
                },
                {
                    path: 'payback',
                    component: PayBack
                },
                {
                    path: 'member',
                    component: Member,
                    children: [
                        {
                            path: '',
                            redirect: '/member/user'
                        },
                        {
                            path: 'user',
                            component: UserInfo
                        },
                        {
                            path: 'order',
                            component: UserOrder
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/cartlist',
            component: CartList
        }
    ],
    // 切换路由时，跑到最顶部
    scrollBehavior() {
        return {
            top: 0
        }
    }
})
export default router