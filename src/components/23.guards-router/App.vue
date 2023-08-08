<template>
    <h1>App根组件</h1>
    <!-- 
        路由vue-router用法 及 路由重定向
     -->
    <hr>
    <!-- router-link 相当于a标签 -->
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/about">关于</router-link>&nbsp;
    <router-link to="/movie">电影</router-link>

    <!-- 路由占位符，此处展示组件 -->
    <router-view></router-view>

    <!-- 

        激活样式高亮，可以使用 router-link-active（默认的）
        如果想自定义激活类名，在 router.js 中使用 linkActiveClass 属性来自定义类名
     -->
</template>

<script>
export default {
    name: 'MyApp'
}
</script>

<style lang="less" scoped>

</style>
