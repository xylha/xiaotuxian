<template>
<p>这里使用的是全局自定义指令， v-color， 且获取了参数值</p>
    <h2 v-color=" 'red' ">Home组件</h2>
    <hr>
    <input type="text" v-focus v-color=" 'blue' ">
    <hr>
    <p> count的值：{{ count }} </p>
    <button @click="count += 1">+1</button>
</template>

<script>
export default {
    name: 'MyApp',
    data() {
        return {
            count: 0
        }
    },
    // 定义指令
    /* 
        这里定义的是 局部的，只能在当前组件中使用，如果要定义全局的，去main.js中
    */
    directives: {
        // 指令名，使用时需要加上 v-
        // focus: {
        //     // 当前被绑定的元素插入到dom中时，会自动触发mounted函数
        //     mounted(el) {
        //         el.focus()
        //     },
        //     /* 
        //         mounted 只在第一次插入DOM时被调用，当DOM更新时不会被触发，
        //         updated 在DOM更新时会触发
        //         使用updated可以在点按钮的同时，使文本框继续获取着焦点
        //     */
        //    updated(el) {
        //         el.focus()
        //    }, 
        // }
        /* 
        注意：在Vue2中，自定义指令部分，mounted 是 bind， updated 是 update
        */
    }
    
}
</script>

<style scoped>

</style>
