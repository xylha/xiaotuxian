<template>

    <!-- 
        计算属性和侦听器的区别：
            计算属性 侧重于侦听多个值的变化(没理解到), 必须返回return一个 新值，
            侦听器 侧重于侦听 单个数据的变化，执行特定的业务处理，不需要返回值
     -->



    <input type="text" v-model="info.infoname">
</template>

<script>
import axios from 'axios'
export default {
    name: 'MyApp',
    data() {
        return {
            username: '',
            info: {
                infoname: '',
                age: 24
            },
        }
    },
    watch: {
        // 会侦听到username的变化，并打印出新值和旧值
        /* async username(newval, oldval) {
            // console.log(newval, oldval)
        // 在侦听器里发起请求
            const { data: res } = await axios.get(`https://www.escook.cn/api/finduser/${newval}`)
            console.log('res', res)
        } */
        /* 
            默认情况下，初次加载不会触发watch侦听器。如果想初次加载就调用，那么需要进行如下改造
        */
       // 1. 监听username 变化
       username: { // 不再是个函数，而是个对象了
            // 2. handler 属性是固定写法，当username变化的时候，会调用handler 
            async handler (newval, oldval) {
                const { data: res } = await axios.get(`https://applet-base-api-t.itheima.net/api/finduser/${newval}`)
                // const { data: res } = await axios.get(`https://www.escook.cn/api/finduser/${newval}`)
                console.log('res', res)
            },
            // 当组件加载完毕后，立马执行这个侦听器，需要添加 immediate 属性
            immediate: true
       },

       /* 
            如果watch侦听的是对象中的一个属性，是监听不到的，需要使用 deep
       */
        /* info: {
            async handler(newval) { // 如果oldval用不到可以省略这个参数
                const { data: res } = await axios.get(`https://www.escook.cn/api/finduser/${newval.infoname}`)
                console.log('res', res)
            },
            deep: true, // 监听到对象中某个属性的变化
            // 但是，使用  deep  的话，info对象中 age 属性变化也会被侦听到，如果不想所有属性变化都触发上面这个 handler 的话，使用下面的方法单独侦听
        }, */
        'info.infoname': {
            async handler(newval) { // 如果oldval用不到可以省略这个参数
                const { data: res } = await axios.get(`https://www.escook.cn/api/finduser/${newval}`)
                console.log('res', res)
            },
        }
    }
}
</script>
