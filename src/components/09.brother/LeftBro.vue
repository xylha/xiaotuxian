<template>
    <div class="left">
        数据发送方： count的值--{{ count }}
        <button @click="add">+1</button>
    </div>
</template>

<script>
// 4. 在数据发送方引入eventBus
import bus from './eventBus'
export default {
    name: 'Left',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count += 1
            // 5. 在合适的位置，调用 .emit 方法，传递需要传过去的数据值
            bus.emit('countChange', this.count)
        }
    }
}
</script>

<style scoped>
    .left {
        display: inline-block;
        width: 300px;
        height: 200px;
        border: 1px solid grey;
    }
</style>
