<template>
    App根组件
    <Table
        :data="goodsList"
    >
        <template #header>
            <th>序号</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>标签</th>
            <th>操作</th>
        </template>
        <template #body="{row, index}">
                <th>{{ index }}</th>
                <th> {{ row.goods_name }} </th>
                <th> ￥{{ row.goods_price }} </th>
                <th> 
                    <span v-for="p in row.tags" :key="p">
                        <span>{{ p }} &nbsp;</span>
                    </span>
                </th>
                <th> <button @click="remove(row.id)">删除</button> </th>
        </template>
    </Table>
</template>

<script>
import Table from './my-table/MyTable.vue'
export default {
    name: 'MyApp',
    data() {
        return {
            goodsList: []
        }
    },
    methods: {
        async getGoodsList() {
            const {data: res} = await this.$http.get('/api/goods')
            console.log('res', res)
            this.goodsList = res.data
        },
        // 删除
        remove(id) {
            this.goodsList = this.goodsList.filter(item => {
                return item.id !== id
            })
        }
    },
    created() {
        this.getGoodsList()
    },
    components: {
        Table,
    }
}
</script>
