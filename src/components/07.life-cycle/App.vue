<template>
    <!-- 
        created 和 mounted 生命周期函数，属于创建阶段，只执行一次。可以在created中发起 ajax 请求，在mounted中操作DOM结构
            问： 为什么不在beforeCreated中发起 ajax 请求？
            答：beforeCreated 阶段还或许不到 data 中的数据，就算发起了ajax请求，也放不到data中
        updated 属于 运行阶段，执行 0次或多次
        unmounted 属于销毁阶段，只执行一次

        *******************************
        created 为最常用的 生命周期函数

        vue3 中和
     -->

    <lifecycle v-if="show"></lifecycle>
    <button @click="show = !show">切换</button>
</template>

<script>
import Lifecycle from './LifeCycle.vue' 

export default {
    name: 'MyApp',
    data() {
        return {
            show: true
        }
    },
    components: {
        Lifecycle,
    }
}
</script>
