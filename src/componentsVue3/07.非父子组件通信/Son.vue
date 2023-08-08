<script setup>
    import { inject } from 'vue';
// 子组件接收数据
    const msg = inject('dataKey')
    const count = inject('countKey')
</script>
<template>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;这是第三层组件</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一层组件传过来的数据---{{ msg }} </p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一层组件传过来的数据---{{ count }} </p>
</template>