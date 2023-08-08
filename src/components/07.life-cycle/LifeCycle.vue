<template>
    <!-- 

     -->


    声明周期组件: {{ count }}
    <button @click="count += 1">+1</button>
</template>

<script>
// import { setup } from 'vue'
export default {
    name: 'Lifecycle',
    // 1. 在内存中被创建完毕
    created() {
        console.log('created: 组件在内存中被创建完毕')
    },
    /* setup() {
        console.log('vue3 组合式API中，代替了vue2中的 created 和 breforeCreated')
    }, */
    // 2. 组件第一次被渲染到页面上
    mounted() {
        console.log('mounted: 组件在页面上渲染完毕')
    },
    // 组件被重新渲染完毕
    updated(){
        console.log('updated: 数据变化，组件重新渲染完毕')
    },
    // 3. 组件被销毁完毕
    unmounted() {
        console.log('unmounted: 组件被销毁完毕了！')
    },
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style scoped>
    button {
        background: rgb(133, 133, 247);
    }
</style>
