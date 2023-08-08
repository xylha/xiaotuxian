<script>
import MyHeaderVue from './MyHeader.vue'
export default {
    name: 'MyApp',
    components: {
        MyHeaderVue
    }
}
</script>

<template>
    <my-header-vue title="App组件传过去" back="blue" fontColor="fontColor" ></my-header-vue>
</template>