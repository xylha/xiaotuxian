<template>
    <h1>Movie根组件</h1>
    <h2>动态获取路由的参数值两种方式：</h2>
    <p>1. 直接从内置对象$route中获取： $route.params.id ---- {{ $route.params.id }} </p>
    <p> 2. 通过路由设置props 属性，组件内接收来获取： {{ id }} </p>
    <hr>
    <button @click="back">后退</button>
</template>

<script>
export default {
    name: 'Movie',
    props: ['id'],
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>

</style>
