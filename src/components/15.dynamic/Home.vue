<template>
    <h1>Home组件---{{ count }} </h1>
    <button @click="this.count++">+1</button>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            count: 0
        }
    },
    created() {
        console.log('组件被创建')
    },
    unmounted() {
        console.log('组件被销毁')
    }
}
</script>

<style scoped>

</style>
