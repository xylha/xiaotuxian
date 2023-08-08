# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

 仿电商项目：
    1. 新建了apis -- 放接口, composables -- 放组合式函数， directives -- 全局自定义指令，styles, utils-- 工具
    2. 新建jsconfig.json文件，在里面配置 @/xx 路径提示。（这里只是提示，真正把 @/转化为src/的，是在vite.config.js里的resolve处）
    3. 引入 Element-plus （文档）
    4. 定制主题，覆盖Element原本样式：
        先安装sass: yarn add sass -D
        在styles下建立- element/index.scss，写上样式
        在 vite.config.js 中配置 elementPlus配色 1， 2
    5. axios配置：yarn add axios
    6. 了解了一下一级路由，二级路由。使用路由不要忘了在main.js里app.use()！！
    7. 引入静态资源-common.scss assets里一些图片，Error lens
    8. 有一些常用的颜色放到一个统一的scss文件里，在styles下的var.scss，在vite.config.js里导入var.scss，就不用每次用都import 'xxxx/var.scss了'
    9. 复制粘贴了一些静态组件代码
    10. 接口获取首页List, 先在api文件夹里创建layout.js文件，引入http.js调接口，再到LayoutHeader里的onMounted调接口发方法
#   11. 顶部导航调接口用 Pinia 优化，在共同父组件里调用接口，子组件直接使用（优化访问接口次数）
#    12. 如果两块区域样式差不多，封装为组件，简单的文本部分使用Props, 复杂的样式模块使用插槽（封装组件）
#   13. 图片懒加载（自定义全局指令，使用vueUse库，监听dom进入可视化区域后，再加载图片）
懒加载优化：不应该直接定义全局指令，全部堆砌到入口main.js文件里，封装为插件directives），在main.js里直接引入插件即可
            监听dom进入可视化区域的方法useIntersectionObserver会重复监听，添加stop方法
    14. 定义一级路由，点击Nav上的文字，跳转相应页面，使用RouterLink上的  active-class 属性，控制点击效果
#   优化路由缓存问题：
#       路由缓存：点击一级路由时，由于有缓存的存在，不会触发生命周期函数，不会发送数据请求，导致点击路由下方页面不发生变化，只有地址栏在变化。（路由 只有组件参数发生时，会复用组件实例，所以不会触发生命周期函数，不会销毁重建）
#       解决路由缓存方案： 1. 给 RouterView 添加 :key="$router.fullPath"，强制销毁重建。（不在意性能）
#                         2. 使用  onBeforeRouteUpdate 。（在意性能问题）
#                   （己）3. 使用computed监听路由参数，watch再根据这个参数不用，发送请求
    15. 组合业务逻辑，封装为use开头的函数: useBanner, useCategory 封装了轮播图与商品部分的逻辑，只需要使用use这俩函数解构出来的值。
    16. 二级路由加载商品时，无限滚动。
    17. 优化： 每次切换路由，要跑到顶部，不在当前位置切换，在router里面配置scrollBehavior属性。
    18. 制作详情页，
            小图大图部分，小图保持激活状态样式可以使用 :class="{active: i=== activeindex}" 当前下标值是否和激活的下标值相等
            实现放大镜
            使用SKU组件
            注册全局组件：在componentProjct文件夹里注册插件在main.js里调用
    19. 登录部分：
            el-plus表单组件，表单校验 自定义规则 validator; 表单提交-统一校验 表单实例.validate
            拦截器处写错误提示，不用每次都判断接口是否成功了；拦截401进行处理
            使用Pinia管理用户数据
                token用户登录状态，Pinia是基于内存，刷新数据会丢失，要做持久化缓存-放到了localStoreage中（pinia-plugin-persistedstate插件）
            在请求拦截器处统一处理发送请求时token
            
            
    20. 购物车部分：
            先定义store数据cartStore
#            几个js方法： 
#               1. find()，用于查找数组中第一个元素，如果没有返回undefined，有则返回那个元素。如果是空数组，不会执行。
#               2. every()， 数组中所有元素是否满足某个条件，如果有一个不满足，返回false,并且不再继续执行
#               3. reduce((prev, cur) => xxx, 0) 
    21. 新增了三级路由



