<template>
    <h1>
        App根组件
    </h1>
    <hr>
    <Test>
        <!-- <template #default="scope"> -->
            <!-- <p>{{ scope }}</p>  -->
            <!-- 会输出作用域的所有内容： { "info": { "name": "zs", "age": 18 }, "msg": "abc" } -->
            <!-- <p>{{ scope.info.name }}</p> -->
        <!-- </template> -->
        <template #default="{msg, info}">
            <p>{{ msg }}</p>
            <p>{{ info.age }}</p>
        </template>
    </Test>
</template>

<script>
import Test from './MyTest.vue'
export default {
    name: 'MyApp',
    components: {
        Test,
    }
}
</script>

<style scoped>

</style>
