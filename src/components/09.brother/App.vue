<template>
    <h1>App根组件</h1>
    <div>
        兄弟组件通信：兄弟不仅限于同一个根节点。
       <p> 1. 先引入 mitt 包，创建eventBus.js 文件，导出 bus</p>
        <p>2. 先引入bus, 在数据接收方的 created 生命周期函数中，调用 bus.on方法，第一个参数先声明一个 自定义事件名，第二个参数是回调函数，
           此函数参数为接收到的数据，在函数中做相应的处理。</p> 
        <p>3. 先引入bus, 在数据发送方的对应位置，调用 bus.emit()方法，第一个参数是上面声明好的 自定义事件，第二个参数是要传递的数据。</p>
    </div>
    <hr>
    <Left></Left>
    <Right></Right>
</template>

<script>
import Left from './LeftBro.vue'
import Right from './RightBro.vue'
export default {
    name: 'MyApp',
    components: {
        Left,
        Right,
    }
}
</script>

<style scoped>

</style>

