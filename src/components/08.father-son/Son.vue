<template>
   <p>从父组件中接收到的count: {{ num }} </p>
   <button @click="addSon">子组件+1</button>
</template>

<script>
export default {
    name: 'Son',
    props: ['num'], // 父向子传递数据
    // emits: ['sonCount'],
    emits: ['update:num'],
    methods: {
        addSon() {
            // this.num = this.num + 1 // 报错！！
            // this.$emit('sonCount', this.num + 1)

            // 使用v-model同步父子组件之间的数据
            this.$emit('update:num', this.num + 1)
        }
    }
}
</script>

<style scoped>

</style>
