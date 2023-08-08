<template>
    <h1>App根组件</h1>
    <button @click="showHome">首页</button>
    <button @click="showMovie">电影</button>
    <hr>
    <!-- 默认是都渲染出来，如果只想渲染一个，使用 component -->
    <!-- <Home></Home>
    <Movie></Movie> -->
    <!-- 组件动态渲染 -->
    <!-- <component :is="comName"></component> -->
    <!-- 
        为了在切换的时候，不让Home组件中的count值归0，那么就是不让他销毁。
        使用keep-live保持组件不被销毁
     -->
     <keep-alive>
        <component :is="comName"></component>
     </keep-alive>
</template>

<script>
import Home from './Home.vue'
import Movie from './Movie.vue'
export default {
    name: 'MyApp',
    components: {
        Home,
        Movie,
    },
    data() {
        return {
            comName: 'Home' // 默认先展示Home
        }
    },
    methods: {
        showHome() {
            this.comName = 'Home'
        },
        showMovie() {
            this.comName = 'Movie'
        }
    }
}
</script>

<style scoped>

</style>
