<script>
export default {
    name: 'MyHeader',
    props: ['title', 'back', 'fontColor'],
}
</script>
<template>
    <div class="header" :style="{background: back, color: fontColor }">
       {{ title || '默认title' }} 
    </div>
</template>
<style lang="css" scope>
    .header {
        height: 300px;
        position: fixed;
        top: 0;
    }
</style>