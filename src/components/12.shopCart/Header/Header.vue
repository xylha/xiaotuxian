<template>
    <p :style="{ color: propColor, background: propBackColor }">{{title}}</p>
</template>

<script>
export default {
    name: 'ShopHeader',
    props: {
        title: {
            type: String,
            required: true,
            default: ''
        },
        propColor: {
            type: String,
            default: ''
        },
        propBackColor: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
    p {
        position: fixed;
        top: 0;
        width: 100%;
        background: rgb(46, 46, 252);
        height: 40px;
        color: #FFF;
        text-align: center;
        line-height: 40px;
    }
</style>
