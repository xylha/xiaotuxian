<template>
    <h1>App根组件</h1>
    <hr>
    <Article>
        <!-- <template v-slot:header> -->
            <!-- 简写: v-slot: ===> # -->
        <template #header>
            <h1>滕王阁序</h1>
        </template>
        <!-- <template v-slot:default> -->
        <template #default>
            <p>豫章故郡，洪都新府</p>
        </template>
        <!-- <template v-slot:footer> -->
        <template #footer>
            <h6>王勃</h6>
        </template>
    </Article>
</template>

<script>
import Article from './Article.vue'
export default {
    name: 'MyApp',
    components: {
        Article,
    }
}
</script>

<style scoped>

</style>
