<script setup>
    import { provide, ref } from 'vue'
    import Father from './Father.vue'
    const count = ref(0)
    // provide格式：第一个参数是一个唯一的key, 第二个参数是要传递的数据
    provide('dataKey', 'this is a msg')
    // 传递响应式数据
    provide('countKey', count)
    setTimeout(() => {
        count.value = 100
    }, 1000)
</script>

<template>
    <p>这是父组件</p>
    <Father></Father>
</template>
