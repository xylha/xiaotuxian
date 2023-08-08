import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'router-active',
    routes: [
        { path: '/', redirect: '/home' }, // redirect重定向
        { path: '/home', component: Home },
        { path: '/movie', component: Movie },
        { path: '/about', component: About }
    ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
    // to: 要去的路由对象
    // from: 来时的路由对象（当前离开的路由对象）
    console.log('导航守卫方法，每个路由跳转都会过这里')
    // 第三个参数如果不接收，那么表示：可以访问每一个路由
    // 第三个参数接收了，必须调用。如果不调用，那么就是不允许访问每个路由，界面就不会显示
    
    if (to.path === '/about') {
        // next() // 无参，直接放行
        // next(false) // 停留在当前页不跳转
        next('/movie') // 强制跳转到Movie组件
    } else {
        next()
    }
})

export default router
