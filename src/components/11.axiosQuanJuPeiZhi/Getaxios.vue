<template>
    <div class="get">
        <h2>Get Info 组件</h2>
        <hr>
        <button @click="getmsg">发起get请求</button>
    </div>
</template>

<script>
export default {
    name: 'GetInfo',
    methods: {
        async getmsg() {
            const {data: res} = await this.$http('/api/get', {
                params: {
                    name: 'ls',
                    age: 33
                }
            })
            console.log('res', res)
        }
    }
}
</script>

<style scoped>
    .get {
        display: inline-block;
        width: 300px;
        height: 200px;
        border: 1px solid grey;
    }
    button {
        background: rgb(94, 94, 244);
        cursor: pointer;
        width: 90px;
        height: 40px;
        border-radius: 4px;
    }
</style>
