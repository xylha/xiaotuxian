<template>
    <h1>App根组件</h1>
    <GetInfo></GetInfo>
    <PostInfo></PostInfo>
</template>

<script>
import GetInfo from './Getaxios.vue'
import PostInfo from './Postaxios.vue'
export default {
    name: 'MyApp',
    components: {
        GetInfo,
        PostInfo
    }
}
</script>
