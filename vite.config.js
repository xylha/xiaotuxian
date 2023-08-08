import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动引入 Element-plus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 1. 配置Element-plus采用sass样式配色
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ],
   // 2. 
   css: {
    preprocessorOptions: {
      scss: {
        additionalData: 
        ` 
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `,
      },
    },
  },
  // 把@/的 @ 转化为实际的src
  resolve:{
    alias:{
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
  	// https: true,
    port: 3002,
    /* proxy: {
      '/api': { // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
        target: 'https://applet-base-api-t.itheima.net', // 目标地址 --> 服务器地址
        changeOrigin: true, // 允许跨域
        ws: true,  // 允许websocket代理
		// 重写路径 --> 作用与vue配置pathRewrite作用相同
        rewrite: ""
      }
     }, */
  },
})
