<script setup>
/* // reactive
// 1. 导入函数
import { reactive } from 'vue';

// 2. 执行函数 传入一个对象类型的参数 变量接收
const state = reactive({ // 单单一个state={count: 0}不会引起视图更新，但是如果reactive处理，会触发视图更新
    count: 0
})

const addCount = () => {
    state.count++
} */

// ref 1. 导入函数
import { ref } from 'vue';

// 2. 执行函数，传入参数 【简单类型 / 对象类型】变量接收
const count = ref(0)
console.log(count)
const addCount = () => {
    // 修改 ref 产生的响应式对象，必须通过 .value 属性
    count.value++
}

</script>

<template>
    <!-- <button @click="addCount">{{ state.count }}</button> -->
    <button @click="addCount">{{ count }}</button>
</template>