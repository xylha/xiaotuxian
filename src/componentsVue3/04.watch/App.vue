<script setup>
    import { ref, watch } from 'vue'

    const count = ref(0)

    const addCount = () => {
        count.value++
    }

    const str = ref('str')

    const changeStr = () => {
        str.value = 'strnew'
    }

    // 1. ====监听单个数据=======
    // 第一个参数要监听谁，第二个参数是个回调函数
    // 这里不需要用 .value，watch自己会去处理
    /* watch(count, (newVal, oldVal) => {
        console.log('count', count.value)
    }) */

    // 2. ======侦听多个数据====
    // 回调的参数对应是后面对应前面数组的
    watch([count, str], ([newCount, newStr], [oldCount, oldStr]) => {
        console.log('任何一个变化都会触发', newCount, oldCount, newStr, oldStr)
    },{ // 第三个参数，一挂载组件就立刻执行一次
        immediate: true
    }
    )

    /* 
     3. deep的使用
    
    */

    // 如果ref 传递的是个对象, watch 是监听不到 objCount 变化的
    const obj = ref({
        objCount: 0
    })

    const addObjCount = () => {
        obj.value.objCount++
    }
    // 只有加上了深度监听，才可以监听到变化 deep
    watch(obj, (newVal, oldVal) => {
        console.log('监听到了吗')
    }, {
        deep: true
    })

    // 4. 如果一个ref对象中有两个属性，那么上面这种deep监听每个变化都会监听到，如果想监听一个，需要这么写： 
    const person = ref({
        name: 'zx',
        age: 15
    })
    const changeName = () => {
        person.value.name = person.value.name === 'zs' ? 'ls' : 'zs'
    }
    const changeAge = () => {
        person.value.age = person.value.age === 15 ? 18 : 15
    }
    // watch里面传两个函数参数
    watch(
        () => person.value.name,
        (newVal, oldVal) => {
            console.log('侦听到了name变化', newVal, oldVal)
        }
    )

</script>

<template>
    <button @click="addCount">{{ count }}</button>
    <button @click="changeStr">变化str</button>
    <button @click="addObjCount">对象+1---{{ obj.objCount }}</button>
    <p>
        <button @click="changeName">对象中多属性变化的监听---name变化</button>
        <button @click="changeAge">对象中多属性变化的监听---age变化</button>
    </p>
</template>
