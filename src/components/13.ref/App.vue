<template>
    <div>
        <h1 ref="myh1">App 根组件</h1>
        <hr>
        <!-- <button @click="getRefs">获取$ref引用</button> -->
        <button @click="setCounter">重置子组件中count值</button>
        <hr>
        <Counter ref="countRef"></Counter>
    </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
    name: 'MyApp',
    components: {
        Counter,
    },
    methods: {
        /* getRefs() {
            console.log(this) // 这里会有一个$refs属性，来获取dom的， 默认指向一个空对象，如果想获取某个dom，为他赋值属性 ref="xxx"
            console.log(this.$refs) // 这里会打印出一个对象：{myh1: h1}, 获取到了 h1 这个dom
            // 如果想改变文本颜色，可以：
            this.$refs.myh1.style.color = 'red'
        } */
        // ref 在组件上的使用：可以调取组件中的方法
        setCounter() {
            this.$refs.countRef.reset() // 调用子组件中的reset方法
        }
    }
}
</script>
