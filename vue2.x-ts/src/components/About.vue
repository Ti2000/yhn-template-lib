<template>
  <div class="about">
    <h1>{{ msgs }}</h1>
    <h1>{{ msg }}</h1>
    <button @click="child">我是About组件按钮</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class About extends Vue {}
</script>
