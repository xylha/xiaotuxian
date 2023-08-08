// ================================         vue3 项目--小兔鲜商城     ============================================
import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/router/index'
import '@/styles/common.scss'
// pinia使用--1. 导入Pinia
import { createPinia  } from 'pinia'
// 引入插件
import { lazyPlugin } from './directives'

// 引入全局组件
import { componentPlugins } from '@/componentsProject/index'

// Pinia数据持久化处理
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// import { getxx } from '@/apis/api'

/* getxx().then(res => {
    console.log(res)
}) */
const app = createApp(App)
const Pinia = createPinia()
Pinia.use(piniaPluginPersistedstate)
// 注册
app.use(Pinia)
app.use(router)

// 使用懒加载插件
app.use(lazyPlugin)
// 引入全局注册插件
app.use(componentPlugins)
app.mount("#app")
