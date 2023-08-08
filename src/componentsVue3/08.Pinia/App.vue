<script setup>

import { useCounterStore } from './store/store'
import { onMounted } from 'vue';

import { storeToRefs } from 'pinia'

// 这里使用时需要 counter.xx, .xx，如果是解构赋值，要使用一个函数包裹起来，不然会丧失响应式
const counter = useCounterStore()
// const { count, doubleCount } = counter // 错误的！！！！count不会随着按钮点击变化
const { count, doubleCount } = storeToRefs(counter) // 正确的！！但是只能解构数据
// 如果想解构方法，就不需要这个方法了
const { add } = counter // 方法可以直接取
onMounted(() => {
    counter.getList()
})
</script>

<template>
    <p>
        从store获取的数据：
    {{ counter.count }}
    </p>
   <button @click="counter.add">+1</button>
    <p>
        computed监听store里的count变化：值为：{{ counter.doubleCount }}
    </p>
    <ul>
        <li v-for="item in counter.list" :key="item.id">
            {{ item.name }}
        </li>
    </ul>
</template>

<style lang="less" scoped>
    
</style>
