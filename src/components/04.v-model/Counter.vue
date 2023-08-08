<template>
    <p>这是子组件，接收到的count值为： {{ counter }}</p>
    <button @click="add">+1</button>
</template>

<script>
export default {
    name: 'MyCounter',
    props: ['counter'],
    emits: ['update:counter'],
    methods: {
        add() {
            this.$emit('update:counter', this.counter + 1)
        }
    }
}
</script>
