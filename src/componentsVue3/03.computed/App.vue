<script setup>
// 使用计算属性，1. 导入
import { ref, computed } from 'vue'

const list = ref([1,2,3,4,5,6])
// 2. 使用computed函数，并用一个变量接收
const compoutedList = computed(() => {
    /* 
    计算属性就是为了 计算。
        1. 不应该有发起请求，处理dom
        2. 不应该修改计算属性的值，他是只读的
    */
    return list.value.filter(item => item > 2)
})

</script>

<template>
    <p>
        原始数组：{{ list }}
    </p>
    <p>
        计算属性过滤后的数组：{{ compoutedList }}
    </p>
</template>
