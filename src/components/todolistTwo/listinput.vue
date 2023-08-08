<template>
    <ul>
        <li v-for="item in listprop" :key="item.id" :class="item.isdone ? 'done' : ''">
            <input type="checkbox" :id="item.id" v-model="item.isdone">
            <label :for="item.id">
                {{ item.content }}
            </label>
            <span >
                -----{{ item.isdone ? '已完成' : '未完成' }}
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        listprop: {
            type: Array,
            required: true,
            default: []
        }
    }
}
</script>

<style scoped>
    li {
        list-style: none;
    }
    .done {
        color: gray;
        text-decoration: line-through;
        font-style:oblique;

    }
</style>
