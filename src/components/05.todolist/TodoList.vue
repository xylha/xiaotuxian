<template>
    <!-- 展示任务内容的组件 -->
    <ul>
        <li v-for="list in todolists" :key="list.id">
            <!-- :id 和 :for 是对应关系 -->
           <!-- <input type="checkbox" @click="$emit('donChange', list.id)" :id="item.id"> -->
           <!-- 因为父组件传过来的数组，传来的是引用，所以可以直接进行更改 -->
           <input type="checkbox" :id="list.id" v-model="list.isdone">
           <label :for="list.id" :class="list.isdone ? 'done' : '' ">{{ list.content }}
            -- {{ list.isdone ? '已完成' : '未完成' }}</label>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        todolists: {
            type: Array,
            required: true,
            default: []
        }
    },
    /* emits: ['doneChange'],
    methods: {
        done(id, e) {
            console.log('id', id)
            console.log('e', e.target.checked)
        }
    } */
}
</script>

<style lang="css">
    li {
        list-style: none;
    }
    p {
        display: inline-block;
    }
    .done {
        text-decoration-line:line-through;
        color: gray;
    }
</style>
