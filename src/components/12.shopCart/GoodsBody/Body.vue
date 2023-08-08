<template>
    <div class="goods_body">
        <ul>
            <li v-for="item in list" :key="item.goods_id">
                <div :class="['list', 'list_one']">
                    <input type="checkbox" :id="item.goods_id" v-model="item.goods_state">
                </div>
                <div :class="['list', 'list_two']">
                    <img :src="item.goods_img" alt="图片">
                </div>
                <div :class="['list', 'list_three']">
                    <span class="list_three_top">
                        {{ item.goods_name }}
                    </span>
                    <div class="list_three_bottom">
                        <span class="list_three_left">
                            ￥{{ item.goods_price }}
                        </span>
                        <span class="list_three_right">
                            <button @click="sub(item.goods_id)" :disabled="item.goods_count === 1">-1</button>&nbsp;
                            <span> {{ item.goods_count }} </span>&nbsp;
                            <button @click="add(item.goods_id)">+1</button>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'GoodsBody',
    props: {
        list: {
            type: Array,
            required: true,
            default: []
        }
    },
    emits: ['subNum', 'addNum'],
    methods: {
        // 减去
        sub(id) {
            this.$emit('subNum', id)
        },
        // 加上
        add(id) {
            this.$emit('addNum', id)
        }
    },
}
</script>

<style lang="less" scoped>
    .goods_body {
        width: 100%;
    }
    ul {
        margin-top: 60px;
        padding-left: 0;
    }
    li {
        list-style: none;
        margin-top: 10px;
        position: relative;
        
        img {
            width: 90px;
            height: 90px;
            vertical-align: middle;
        }
        .list_three {
            width: calc(100% - 110px);
            .list_three_top {
                position: absolute;
                top: 0;
                padding-left: 10px;
            }
            .list_three_bottom {
                position: absolute;
                bottom: 0;
                width: calc(100% - 110px);
                .list_three_left {
                    float: left;
                    color: red;
                }
                .list_three_right {
                    float: right;
                }
            }
        }
        
    }
    .list {
        display: inline-block;
    }
</style>
