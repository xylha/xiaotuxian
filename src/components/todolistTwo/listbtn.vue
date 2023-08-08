<template>
    <button 
        :class="active === 0 ? 'active' : '' "
        @click="changeBtn(0)"
    >全部</button>&nbsp;
    <button 
        :class="active === 1 ? 'active' : '' "
        @click="changeBtn(1)"
    >已完成</button>&nbsp;
    <button 
        :class="active === 2 ? 'active' : '' "
        @click="changeBtn(2)"
    >未完成</button>
</template>

<script>
export default {
    name: 'MyBtn',
    emits: ['update:active'],
    props: {
        active: {
            type: Number,
            required: true,
            default: 0,
        }
    },
    methods: {
        changeBtn(val) {
            this.$emit('update:active', val)
        }
    }
}
</script>

<style lang="css" scoped >
.active {
    background: rgb(146, 146, 243);
}
    
</style>
