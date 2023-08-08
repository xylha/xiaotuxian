<template>
    <h2>父子组件通信：props</h2>
    <p>父组件中的值为： {{ count }} </p>
    <button @click="count++">+1</button>
    <!-- <Son :num="count" @sonCount="countChange"></Son> -->
    <!-- 实现父子之间保持数据同步，可以不用@sonCount这样，直接在组件上使用v-model -->
    <Son v-model:num = "count"></Son>
</template>

<script>
import Son from './Son.vue'
export default {
    name: 'MyApp',
    components: {
        Son,
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        countChange(val) {
            console.log('val', val)
            this.count = val
        }
    }
}
</script>

<style scoped>

</style>
