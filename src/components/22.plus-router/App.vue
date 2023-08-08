<template>
    <h1>App根组件</h1>
    <!-- 
        嵌套路由
     -->
    <hr>
    <!-- router-link 相当于a标签 -->
    <router-link to="/home">首页</router-link>&nbsp;
    <router-link to="/about">关于</router-link>&nbsp;
    <!-- 动态路由 -->
    <router-link to="/movie/1">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <!-- <router-link to="/movie/3">电影3</router-link> -->
    <!-- 
        命名式路由实现声明式导航：
            :to="{一个对象}"

            实现编程式导航：
                在push({ name: 'mov', params: { id: 3 } })方法中传入这个对象
     -->
     <router-link :to="{ name: 'mov', params: { id: 3 } }"> go to movie</router-link>

    <!-- 路由占位符，此处展示组件 -->
    <router-view></router-view>

    <!-- 
        声明式导航：
            通过 a 标签，或router-link跳转的叫做 声明式导航。
        编程式导航：
            通过 location.href这些API跳转的是 编程式导航
        在Home组件中，有编程式导航示例
     -->
</template>

<script>
export default {
    name: 'MyApp'
}
</script>

<style lang="less" scoped>

</style>
