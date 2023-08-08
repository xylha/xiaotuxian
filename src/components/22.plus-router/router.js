import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'

import Tab1 from './tabs/Tab1.vue'
import Tab2 from './tabs/Tab2.vue'

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'router-active',
    routes: [
        { path: '/', redirect: '/home' }, // redirect重定向
        { path: '/home', component: Home },
        // :id方式来匹配动态路由
        { name: 'mov', path: '/movie/:id', component: Movie, props: true },
        { path: '/about',
          component: About,
          redirect: '/about/tab1', // 嵌套路由中的重定向
          children: [
            // 注意：子路由 不要以 / 开头
            { path: 'tab1',component: Tab1 },
            { path: 'tab2', component: Tab2 }
          ]
        }
    ]
})

export default router
