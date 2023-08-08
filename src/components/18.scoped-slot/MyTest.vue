<template>
    <h2>TEST组件</h2>
    <slot :info="msgInfo" :msg="message"></slot>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            msgInfo: {
                name: 'zs',
                age: 18
            },
            message: 'abc'
        }
    }
}
</script>

<style scoped>

</style>
