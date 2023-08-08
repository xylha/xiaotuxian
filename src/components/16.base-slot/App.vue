<template>
    <h1>App根组件</h1>
    <hr>
    <Count>
        <!-- 如果没有插槽，这里的内容会被丢弃掉 -->
        <p>这是插槽 中间的话</p>
    </Count>
</template>

<script>
import Count from './Count.vue'
export default {
    name: 'MyApp',
    components: {
        Count,
    }
}
</script>
