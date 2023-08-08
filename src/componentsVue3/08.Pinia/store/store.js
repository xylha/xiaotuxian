// 1. 导入一个方法
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function add() {
        count.value++
    }
    // getter
    const doubleCount = computed(() => count.value * 2)

    // const API_URL = 'http://geek.itheima.net/v1_0/channels'

    const list = ref([])
    // 异步
    const getList = async () => {
        const {data: res} = await axios.get('http://geek.itheima.net/v1_0/channels')
        console.log('res', res)
        list.value = res.data.channels
        console.log(list.value)
    }

    return {
        count,
        doubleCount,
        add,
        getList,
        list,
    }
})