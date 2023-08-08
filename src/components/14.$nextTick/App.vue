<template>
    <h1>App根组件</h1>
    <hr>
    <input type="text" v-if="inputVisible" ref="refinp">
    <button v-else @click="showInput">展示文本框</button>
</template>

<script>
export default {
    name: 'MyApp',
    data() {
        return {
            inputVisible: false
        }
    },
    methods: {
        showInput() {
            this.inputVisible = true
            // 在展示输入框的时候自动获取焦点
            // this.$refs.refinp.focus() // 这里会报错，因为dom更新是异步的，在执行到这里的时候，还没有渲染出input输入框
            /* 
                $nextTick(cb)方法，会把cb回调放到dom更新完成之后再执行。
                也就是：等组件异步更新完dom后， 在执行这个回调，从而保证 cb 能够获取到更新完成后的dom
            */
           this.$nextTick(() => {
                this.$refs.refinp.focus()
           })
        }
    }
}
</script>

<style scoped>

</style>
