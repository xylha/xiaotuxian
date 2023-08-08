<template>
    <h1>App根组件</h1>
    <button @click="changeColor">改变根组件中color值</button>
    <hr>
    <LevelTwo></LevelTwo>
</template>

<script>
import { computed } from 'vue'
import LevelTwo from './LevelTwo.vue'
export default {
    name: 'MyApp',
    data() {
        return {
            color: 'red',
        }
    },
    components: {
        LevelTwo
    },
    methods: {
        changeColor() {
            this.color = this.color === 'red' ? 'blue' : 'red'
        }
    },
    // 共享给三级组件：
    provide() {
        // 返回要共享的数据对象
        /* return {
            color: this.color,
            count: 1
        } */
        /* 如果想这里更新数据，下层组件同步更新，需要使用 computed 函数 */
        return {
            color: computed(() => this.color)
        }
    }
}
</script>

<style scoped>

</style>
