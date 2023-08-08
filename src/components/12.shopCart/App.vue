<template>
    <!-- 购物车案例 -->
    <div class="shop_body">
        <!-- 标头 -->
        <Header
            :title="headerTitle"
        ></Header>
        <!-- 数据列表 -->
        <Body
            :list = "goodsList"
            @addNum="addCount"
            @subNum="subCount"
        ></Body>
        <!--底部 -->
        <Footer
            :allPrice="totalPrice"
            :allNum="totalNum"
            :fullSelect="isFullSelect"
            @fullGoods="fulls"
        ></Footer>
    </div>

</template>

<script>
import Header from './Header/Header.vue'
import Footer from './Footer/Footer.vue'
import Body from './GoodsBody/Body.vue'
export default {
    name: 'MyApp',
    components: {
        Header,
        Footer,
        Body
    },
    data() {
        return {
            headerTitle: '购物车案例',
            goodsList: [],
        }
    },
    methods: {
        async getGoodsList() {
            const {data: res} = await this.$http.get('/api/cart')
            console.log('res:', res)
            if (res.status !== 200) return alert('请求数据列表失败！')
            this.goodsList = res.list
        },
        // 增加商品
        addCount(id) {
            this.goodsList.filter(item => {
                if (item.goods_id === id) {
                    item.goods_count += 1
                }
            })
        },
        // 减去商品
        subCount(id) {
            this.goodsList.filter(item => {
                if (item.goods_id === id) {
                    if (item.goods_count === 1) return alert('商品数量不能为0')
                    item.goods_count--
                }
            })
        },
        fulls(val) {
            this.goodsList.filter(item => {
                item.goods_state = val
            })
        }
    },
    computed: {
        // 总价格
        totalPrice() {
            let totalprice = 0
            this.goodsList.filter(item => {
                if (item.goods_state) {
                    totalprice += (item.goods_count * item.goods_price)
                }
            })
            return totalprice
        },
        // 总数量
        totalNum() {
            let totalnum = 0
            this.goodsList.filter(item => {
                if (item.goods_state) {
                    totalnum += item.goods_count
                }
            })
            return totalnum
        },
        // 是否全选
        isFullSelect() {
            let full = []
            this.goodsList.filter(item => {
                full.push(item.goods_state)
            })
            console.log('full', full)
            console.log('full.indexOf(false) === -1', full.indexOf(false) === -1)
            return full.indexOf(false) === -1 // true
        }
    },
    // 获取商品数据
    created() {
        this.getGoodsList()
    }
}
</script>

<style lang='less' scoped>
    .shop_body {
        width: 100%;
    }
</style>