<template>
    子组件中的count: {{ count }}
    <button @click="add">+1</button>
</template>

<script>
export default {
    name: 'MyCount',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count++
        },
        reset() {
            this.count = 0
        }
    }
}
</script>

<style lang="less" scoped>

</style>
