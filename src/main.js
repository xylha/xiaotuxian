import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
// import App from './components/MyHeader/App.vue'
// import App from './components/02.computed/App.vue' // 学习计算属性
// import App from './components/03.emitEvent/App.vue' // 学习emit （子向父传数据）
// import App from './components/04.v-model/App.vue' // 学习组件上绑定v-model（父向子传值）
// import App from './components/05.todolist/App.vue' // todolist小案例 
// import App from './components/06newtodolist/App.vue' // 自己重新写一边todolist小案例
// import App from './components/06.watch/App.vue' // watch 侦听器
// import App from './components/07.life-cycle/App.vue' // 生命周期函数
// import App from './components/08.father-son/App.vue' // 数据共享之---父子组件之间通信
// import App from './components/09.brother/App.vue' // 数据共享之---兄弟之间通信 【EventBus】
// import App from './components/10.provide&inject/App.vue' // 数据共享之---后代组件之间通信 【父：provide, 子: inject】
// import App from './components/11.axiosQuanJuPeiZhi/App.vue' // 全局配置axios
// import App from './components/12.shopCart/App.vue' // 购物车案例
// import App from './components/13.ref/App.vue' // 学习 ref
// import App from './components/14.$nextTick/App.vue' // ￥nextTick 异步完成dom更新后执行操作
// import App from './components/15.dynamic/App.vue' // 动态组件；keep-live保持组件不被销毁
// import App from './components/16.base-slot/App.vue' // 插槽
// import App from './components/17.name-slot/App.vue' // 具名插槽
// import App from './components/18.scoped-slot/App.vue' // 作用域插槽
// import App from './components/19.directive/App.vue' // 自定义指令
// import App from './components/Table/App.vue' // Table 案例
// import App from './components/20.easy-router/App.vue' // 初识路由
// import App from './components/21.start-router/App.vue' // vue-router
// import App from './components/22.plus-router/App.vue' // 嵌套路由
// import App from './components/23.guards-router/App.vue' // 导航守卫


// import router from './components/21.start-router/router'
// import router from './components/22.plus-router/router'、
// import router from './components/23.guards-router/router'

// 全局配置axios，这里改写了一下子
// createApp(App).mount('#app')

import axios from 'axios'

const app = createApp(App)

// axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net/'
axios.defaults.baseURL = 'http://localhost:3002'

// axios 请求拦截器
axios.interceptors.request.use(config => {
    // 为当前请求配置Token字段
    config.headers.Authorization = 'Bearer xxx'
    console.log('config', config)
    return config
})

axios.interceptors.response.use(response => {
    console.log('request', response)
    return response
})

app.config.globalProperties.$http = axios

// 全局自定义指令
/* app.directive('focus', {
    mounted(el) {
        el.focus()
    }
}) */
// 当mounted 和 updated 中的逻辑一样时，可以进行简写：
app.directive('focus', (el) => {
    el.focus()
})

// 指令的参数值
app.directive('color', (el, binding) => {
    // 指令的参数值可以通过第二个形参获取到-binding.value， 第一个形参是dom
    el.style.color = binding.value
})

// 挂在路由模块
// app.use(router)

app.mount("#app")
