<template>
    <!-- 删选完成未完成组件 -->
    <!-- <button @click="all(0)" :class="active === 0 ? 'isActive' : '' ">全部</button>
    <button @click="ywc(1)" :class="active === 1 ? 'isActive' : '' ">已完成</button>
    <button @click="wwc(2)" :class="active === 2 ? 'isActive' : '' ">未完成</button> -->
    <button @click="btnclick(0)" :class="active === 0 ? 'isActive' : '' ">全部</button>
    <button @click="btnclick(1)" :class="active === 1 ? 'isActive' : '' ">已完成</button>
    <button @click="btnclick(2)" :class="active === 2 ? 'isActive' : '' ">未完成</button>
</template>

<script>
export default {
    name: 'MyTodoButton',
    // emits: ['showAll', 'showDone', 'showNotDone'],
    emits: ['update:active'],
    props: {
        active: Number,
        required: true,
        // 0--全部，1--已完成，2--未完成
        default: 0
    },
    methods: {
        /* all() {
            this.$emit('showAll')
        },
        ywc() {
            this.$emit('showDone')
        },
        wwc() {
            this.$emit('showNotDone')
        } */
        btnclick(index) {
            this.$emit('update:active', index)
        }
    }
}
</script>

<style lang="css" scope>
    .isActive {
        background: rgb(137, 137, 234);
    }
</style>
