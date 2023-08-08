<template>
    <!-- 一个todolist小案例 -->
    <TodoInput @addlist="addtasklist"></TodoInput>
    <!-- <TodoList :todolists="list" @donChange="listDoneChange"></TodoList> -->
    <TodoList :todolists="tasklist" @donChange="listDoneChange"></TodoList>
    <!-- <TodoButton 
     @showDone="shaiDone" 
     @showNotDone="shaiNotDone"
     @showAll="quanbu"
     :active="activeIndex"
    ></TodoButton> -->
    <TodoButton 
      v-model:active="activeIndex"
    ></TodoButton>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
import TodoButton from './todoButton.vue'
export default {
    name: 'MyApp',
    components: {
        TodoInput,
        TodoList,
        TodoButton,
    },
    data() {
        return {
            list: [
                {id: 1, content: '周一上班', isdone: false},
                {id: 2, content: '周二上班', isdone: false},
                {id: 3, content: '周三上班', isdone: false},
            ],
            nextId: 4,
            activeIndex: 0,
        }
    },
    computed:{
        tasklist() {
            switch(this.activeIndex) {
                case 0:
                    return this.list
                case 1:
                    return this.list.filter(item => item.isdone === true)
                case 2:
                    return this.list.filter(item => item.isdone === false)
            }
        }
    },
    methods: {
        listDoneChange(id) {
            this.list.map(item => {
                if (item.id === id) {
                    return item.isdone = !item.isdone
                }
            })
        },
        // 添加任务
        addtasklist(conts) {
            this.list.push({
                id: this.nextId,
                content: conts,
                isdone: false
            })
            this.nextId++
           
        },
        // 筛选已经完成的列表内容
        shaiDone() {
            this.list = this.list.filter(item => {
                console.log('isdone', item.isdone === true)
                if (item.isdone ) {
                    return item
                }
            })
             this.activeIndex = 1
        },
        // 筛选未完成的列表内容
        shaiNotDone() {
            this.list = this.list.filter(item => {
                return item.isdone === false
            })
             this.activeIndex = 2
        }
    }
}
</script>
