<template>
    <AddTask @addtask="addRealTask"></AddTask>
    <MyInput :listprop="tasklist"></MyInput>
    <MyBtn v-model:active="activeIndex"></MyBtn>
</template>

<script>
import MyInput from './listinput.vue'
import AddTask from './listadd.vue'
import MyBtn from './listbtn.vue'
export default {
    name: 'MyApp',
    components: {
        MyInput,
        AddTask,
        MyBtn
    },
    data() {
        return {
            list: [
                {id: 1, content: '周一要上班', isdone: false},
                {id: 2, content: '周二要上班', isdone: false},
                {id: 3, content: '周三要上班', isdone: false},
            ],
            nextId: 4,
            activeIndex: 0, // 默认全部
        }
    },
    methods: {
        addRealTask(val) {
            this.list.push({
                id: this.nextId,
                content: val,
                isdone: false,
            })
            this.nextId += 1
        }
    },
    computed: {
        tasklist() {
            if (this.activeIndex === 0) {
                return this.list
            } else if (this.activeIndex === 1) {
               return this.list.filter(item => item.isdone)
            } else {
                return this.list.filter(item => !item.isdone)
            }
        }
    }
}
</script>

<style lang="css" scoped>

</style>
