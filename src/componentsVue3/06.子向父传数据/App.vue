<script setup>
    import { ref, onMounted } from 'vue'
    import Son from './Son.vue'
    const str = ref('')
    // 通过 ref 获取 dom 或 组件
    const domRef = ref(null)
    const sonRef = ref(null)
    // 在生命周期函数中打印一下
    onMounted(() => {
        console.log('domREf', domRef)
        // 组件中要想打印出setup中的属性，需要在组件内调用 defineExpose 方法暴露出来，这里才会打印
        console.log('sonRef', sonRef)
    })
    const getMsg = (msg) => {
        console.log(msg)
        str.value = msg
    }
</script>

<template>
    <p ref="domRef">这是父组件</p>
    <p>父组件的str ----- {{ str }}</p>
    <Son
        @toFatherMsg="getMsg"
        ref="sonRef"
    ></Son>
</template>