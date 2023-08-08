<script setup>
import { onMounted } from 'vue';
    import LayoutNav from './components/LayoutNav.vue';
    import LayoutHeader from './components/LayoutHeader.vue';
    import LayoutFooter from './components/LayoutFooter.vue';
    import LayoutFixed from './components/LayoutFixed.vue';

    // 使用pinia
    import { useCategoryStore } from '@/stores/catrgoryStore';
    const categoryStore = useCategoryStore()
    onMounted(() => {
      categoryStore.category()
    })
</script>
<template>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key, 破坏复用机制，强制销毁重建 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <router-view></router-view>
    <LayoutFooter />
</template>