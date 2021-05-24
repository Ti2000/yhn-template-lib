<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, defineEmit, useContext } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

onMounted(() => {
  console.log('组件加载完毕')
})
</script>
