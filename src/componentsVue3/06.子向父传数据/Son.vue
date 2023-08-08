<script setup>
    const emit = defineEmits(['toFatherMsg'])
    const gotoFather = () => {
        emit('toFatherMsg', '这是子组件传过来的')
    }

    defineExpose({
        gotoFather,
    })
    
</script>

<template>
    <p>这是子组件</p>
    <button @click="gotoFather">子组件的btn</button>
</template>