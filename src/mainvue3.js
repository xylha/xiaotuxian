// ================================         vue3      ============================================
import { createApp } from 'vue'
import './style.css'
// import App from './componentsVue3/01.setUp/App.vue' // 初始setup
// import App from './componentsVue3/02.reactive&ref/App.vue' // reactive与ref， 用ref比较多
// import App from './componentsVue3/03.computed/App.vue' // conmputed 计算属性
// import App from './componentsVue3/04.watch/App.vue' // watch侦听器
// import App from './componentsVue3/05.父子通信-父向子传数据/App.vue' // 父向子通信
// import App from './componentsVue3/06.子向父传数据/App.vue' // 子向父通信
// import App from './componentsVue3/07.非父子组件通信/App.vue' // project 与 inject非父子通信
import App from './componentsVue3/08.Pinia/App.vue'

const app = createApp(App)

// pinia使用--1. 导入Pinia
import { createPinia  } from 'pinia'
const Pinia = createPinia()
// 注册
app.use(Pinia)
app.mount("#app")
