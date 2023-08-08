<template>
    <!-- 这里是标题部分 -->
    <header>
        <slot name="header"></slot>
    </header>
    <!-- 这里是内容部分 -->
    <main>
        <!-- 默认 name="default" -->
        <slot></slot>
    </main>
    <!-- 这里是底部 -->
    <footer>
        <slot name="footer"></slot>
    </footer>
</template>

<script>
export default {
    name: 'Article'
}
</script>

<style scoped>
    header {
        width: 300px;
        height: 100px;
    }
    main {
        width: 300px;
        height: 100px;
        margin-top: 20px;
    }
    footer {
        width: 300px;
        height: 100px;
        margin-top: 20px;
    }
</style>
