// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
    install(app) { // app就是全局挂载Vue的那个对象
        // 自定义指令使用时，需要v-xxx，传入值，才能binding.value使用 v-img-lazy="item.picture"
        app.directive("img-lazy", {
            mounted(el, binding){
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src =binding.value
                            // 防止重复监听
                            stop()
                        }
                        
                    },
                )
            }
        })
    }
}