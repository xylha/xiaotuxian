<template>
    <h3>Counter 子组件</h3>
    <p>这里的count为： {{ count }} </p>
    <button @click="add">+1</button>
</template>

<script>
export default {
    name: 'MyCounter',
    data() {
        return {
            count: 1
        }
    },
    // 1. 声明自定义事件
    emits: ['countChange'],
    methods: {
        add() {
            this.count++
            // 2. 在方法中使用 this.$emit()触发自定义事件
            // 还可以传参，使父组件可以拿到子组件的值，第二个参数
            this.$emit('countChange', this.count)
            // 3. 在父组件中使用v-on调用这个方法，绑定一个新方法上
        }
    }
}
</script>

<style>

</style>