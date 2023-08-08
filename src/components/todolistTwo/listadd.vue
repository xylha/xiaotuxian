<template>
    任务：
    <input type="text" v-model="taskcontent">&nbsp;
    <button @click="add">添加任务</button>
</template>

<script>
export default {
    name: 'MyAdd',
    emits: ['addtask'],
    data() {
        return {
            taskcontent: ''
        }
    },
    methods: {
        add() {
            this.$emit('addtask', this.taskcontent)
            this.taskcontent = ''
        }
    }
}
</script>
<style lang="css" scoped>

</style>

