<template>
    <div class="right">
        数据接收方： num的值--{{ num }}
    </div>
</template>

<script>
// 2. 在数据的接收方，引入eventBus
import bus from './eventBus'
export default {
    name: 'Right',
    data() {
        return {
            num: 0
        }
    },
    // 3. 在created函数中,调用Bus的on方法，第一个参数需要声明自定义事件，第二个参数是个回调函数，接收参数为传过来的数据，函数中做相应的操作
    created() {
        bus.on('countChange', (data) => {
            this.num = data
        })
    }
}
</script>

<style scoped>
    .right {
        display: inline-block;
        width: 300px;
        height: 200px;
        border: 1px solid grey;
        margin-left: 20px;
    }
</style>
