<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent((props, ctx) => {
  onMounted(() => {
    console.log('组件加载完毕')
  })
})
</script>
