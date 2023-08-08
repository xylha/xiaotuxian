<template>
    <div class="post">
        <h2> postInfo组件</h2>
        <hr>
        <button @click="postapi">发起post请求</button>
    </div>
</template>

<script>
export default {
    name: 'PostInfo',
    methods: {
        async postapi() {
            const {data :res} =  await this.$http.post('/api/post', {name: 'zs', age: 20})
            console.log('res', res)
        }
    }
}
</script>

<style scoped>
    .post {
        display: inline-block;
        width: 300px;
        height: 200px;
        border: 1px solid grey;
        margin-left: 20px;
    }
    button {
        background: rgb(58, 147, 255);
        cursor: pointer;
        width: 100px;
        height: 40px;
        border-radius: 4px;
    }
</style>
