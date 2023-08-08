// 封装倒计时逻辑
import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
    // 1. 响应的数据
    let timer = null
    const time = ref(0)
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    // 2. 开启倒计时的函数
    const start = (currentTime) => {
        // 开启倒计时逻辑
        time.value = currentTime
        timer = setInterval(() => {
            if (time.value === 0) { // 到0时清除计时器（此处应取消订单）
                clearInterval(timer)
                return;
            }
            time.value--
        }, 1000);
    }
    // 组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}