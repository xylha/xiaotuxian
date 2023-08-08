<template>
    <div>
        <span>
            <input type="checkbox" :id="-1" :defaultChecked="fullSelect" @click="full" >
            <label for="-1">全选</label>
        </span>
        <span>合计：
            <span class="price">￥{{ allPrice.toFixed(2) }}</span>
        </span>
        <button>结算（{{ allNum }}）</button>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        allPrice: {
            type: Number,
            required: true,
            default: 0
        },
        allNum: {
            type: Number,
            required: true,
            default: 0
        },
        fullSelect: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    emits: ['fullGoods'],
    methods: {
        full(e) {
            this.$emit('fullGoods', e.target.checked)
        }
    }
}
</script>

<style lang="less" scoped>
    div {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 40px; 
        display: flex;
        justify-content: space-between;
        // align-items: center;
        border-top: 1px solid #efefef;
        span {
            line-height: 40px;
            .price {
                color: red;
            }
        }
    }
    button {
        width: 100px;
        border: 0;
        background: rgb(32, 103, 255);
        color: #FFF;
    }
</style>
