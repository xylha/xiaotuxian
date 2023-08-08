<template>
    <table>
        <thead>
            <!-- 标题 -->
            <tr>
                <slot name="header"></slot>
            </tr>
        </thead>
        <tbody>
            <!-- 内容 -->
            <tr v-for="(item, index) in data" :key="item.id">
                <slot name="body" :row="item" :index="index"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'Table',
    props: {
        data: {
            type: Array,
            required: true,
            default: []
        }
    }
}
</script>

<style lang="less" scoped>

</style>
