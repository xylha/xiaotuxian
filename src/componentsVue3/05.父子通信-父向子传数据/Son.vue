<script setup>
// vue2中是props:{}中声明的，vue3中需要调用definedProps函数来声明props
    const props = defineProps({
        message: String
    })
</script>

<template>
    这是子组件，接收父组件传过来的值---{{ message }}
</template>