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

export default router
