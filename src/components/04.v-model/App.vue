<template>
<!-- 

    父子之间相互传递数据：
        父 -> 子，通过Props
        子 -> 父，通过父v-model:xxx, 子组件emits: ['update:xxx'], this.$emit('update:xxx', www)
 -->
    <p> App父组件: count 的值为 {{ count }} </p>
    <button @click="add">+1</button>
    <hr>
    <MyCounterVue v-model:counter="count"></MyCounterVue>
</template>
<script>
import MyCounterVue from './Counter.vue'
export default {
    name: 'MyApp',
    components: {
        MyCounterVue
    },
    data() {
        return {
            count: 1
        }
    },
    methods: {
        add() {
            this.count += 1
        }
    }
}
</script>
