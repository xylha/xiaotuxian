<template>
    <h1>About根组件</h1>
    <hr>
    <router-link to="/about/tab1">Tab1组件</router-link>&nbsp;
    <router-link to="/about/tab2">tab2组件</router-link>

    <router-view></router-view>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="less" scoped>

</style>
