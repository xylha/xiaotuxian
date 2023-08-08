<template>
    <h3>三级组件</h3>
    <!-- <p>从App组件中接收到的数据：{{ color }} --- {{ count }} </p> -->
    <!-- 说是使用 color.value 才能正常显示，但是用 .value 就不显示了 -->
    <p>从App组件中接收到的数据：{{ color }} </p>
</template>

<script>
export default {
    name: 'levelThree',
     // 在需要用数据的组件接收
    // inject: ['color', 'count'],
    inject: ['color']
}
</script>
