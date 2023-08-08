<template>
  <!-- 
    主要介绍 emit 的使用
   -->
   <h1>App父组件</h1>
   <hr>
   <my-counter-vue @countChange="change"></my-counter-vue>
</template>

<script>
import MyCounterVue from'./Counter.vue'
export default {
    name: 'MyApp',
    components: {
        MyCounterVue
    },
    methods: {
        change(val) {
            console.log('父组件监听到了子组件数据的变化', val)
        }
    }
}
</script>

<style>

</style>