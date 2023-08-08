<template>
    <h1>Home根组件</h1>
    <hr>
    <button @click="gotoMovie(2)">跳转到Movie组件</button>
    <button @click="gotoMovie2(3)">命名式路由编程式导航--跳转到Movie</button>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        gotoMovie(id) {
            this.$router.push(`/movie/${id}`)
        },
        gotoMovie2(id) {
            this.$router.push({ name: 'mov', params: { id } })
        }
    }
}
</script>

<style lang="less" scoped>

</style>
