<!-- <script>
export default {
    // setup函数是在 beforeCreate 之前执行
    setup() {
        console.log('setUP')
        let message = 'Hello Vue3'
        const printMsg = () => {
            console.log(message)
        }
        // 必须 return 出去才能使用
        return {
            message,
            printMsg
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    }
}
</script> -->

<!-- 语法糖:setup 。
    省略了 export default{}, 省略了在setup函数中，每定义一个都要return一个参数
-->
<script setup>
// 没有 this !!!!
    let message = 'Hello Vue3'
    const printMsg = () => {
        console.log(message)
    }
</script>

<template>
    <div>{{  message  }}</div>
    <button @click="printMsg">打印</button>
</template>
