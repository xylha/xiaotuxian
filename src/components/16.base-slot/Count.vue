<template>
    <h2>Count组件</h2>
    <p>这是第一段话</p>
    <slot>这是后备内容，如果不给内容，这里将会展示</slot>
    <p>这是最后一句话</p>
</template>

<script>
export default {
    name: 'Count'
}
</script>

<style scoped>

</style>
