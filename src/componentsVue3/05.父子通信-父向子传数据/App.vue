<script setup>
    // vue2中引入了还需要注册组件，vue3中在此处直接引用了就可以了
    import { ref } from 'vue'
    import Son from './Son.vue'
    const msg = ref('father msg')
    const change = () => {
        msg.value = 'new father val'
    }
</script>
<template>
    <p>这是父组件</p>
    <button @click="change">改变父组件传过去的数据</button>
    <Son :message="msg"></Son>
</template>