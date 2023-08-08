<script setup>
defineProps({
    goods: {
        type: Object,
        default: () => {}
    }
})
</script>

<template>
  <div class="prodCont">
    <RouterLink to="/">
        <img  v-img-lazy="goods.picture" alt=""  />
        <!-- <el-tooltip
        class="box-item"
        effect="dark"
        placement="top"
      >
        <template #content>
          {{ goods.name }}
        </template>
          <p class="name" >{{ goods.name }}</p>
        </el-tooltip> -->
        <p class="name" >{{ goods.name }}</p>
        <p class="price" >&yen;{{ goods.price }}</p>
     
    </RouterLink>
  </div>
     
</template>
 
<style lang = "scss" scoped>

  
</style>