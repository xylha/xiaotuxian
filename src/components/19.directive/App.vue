<template>
    <h1>
        App根组件
        <!-- <input type="text" v-focus> -->
    </h1>
    <hr>
    <Home>
    </Home>
</template>

<script>
import Home from './Home.vue'
export default {
    name: 'MyApp',
    components: {
        Home,
    }
}
</script>

<style scoped>

</style>
