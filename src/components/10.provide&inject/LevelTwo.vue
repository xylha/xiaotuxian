<template>
    <h2>二级组件</h2>
    <hr>
    <LevelThreeVue></LevelThreeVue>
</template>

<script>
import LevelThreeVue from './LevelThree.vue'
export default {
    name: 'levelTwo',
    components: {
        LevelThreeVue,
    },
   
}
</script>
