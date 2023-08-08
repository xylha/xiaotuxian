<template>
    <!-- 添加新任务组件 -->
    任务：<input type="text" v-model="cont">
    <button class="addbtn" @click="add">添加新任务</button>
</template>

<script>
export default {
    name: 'todoInput',
    emits: ['addlist'],
    data() {
        return {
            cont: ''
        }
    },
    methods: {
        add() {
            if (this.cont === '') {
                alert('空任务！')
                return
            }
            this.$emit('addlist', this.cont)
            this.cont = ''
        }
    }
}
</script>

<style lang="css" scoped>
    .addbtn {
        background: rgb(170, 170, 232);
    }
</style>