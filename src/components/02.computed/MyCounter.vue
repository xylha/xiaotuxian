<script>
export default {
    name: 'MyCounter',
    data() {
        return {
            conut: 1
        }
    },
    computed: {
        plus() {
            return this.conut * 2
        }
    }
}
</script>

<template>
    <input type="text" v-model="conut">
    <p> {{ conut }} × 2 = {{ plus }} </p>
</template>
