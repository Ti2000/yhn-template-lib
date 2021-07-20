<template>
  <div class="hello">
    <h1>{{ msgs }}</h1>
    <h1>{{ msg }}</h1>
    <button @click="child">我是Hello组件按钮</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Inject, Watch } from 'vue-property-decorator'
import myMixins from '../myMixins'

@Component({})
export default class HelloWorld extends myMixins {
  get msg() {
    return `computed 属性: msg`
  }

  mounted() {
    console.log(this)

    // ;(this as any).$bus.$on('old', function(e: any) {
    //   console.log('Hello', e)
    // })
    // console.log('Hellow组件', this.provide)
    // console.log('Hellow组件', this.valueFromMixins)
  }
  @Watch('msgs', { immediate: true, deep: true })
  onWatch(newVal: string, oldVal: string) {
    // console.log('Hellow组件', '正在监听 oldVal', oldVal)
    // console.log('Hellow组件', '正在监听 newVal', newVal)
  }

  @Prop({ type: String, default: '父组件没有传值' })
  msgs?: string
  @Prop({ type: Number, default: '父组件没有传值' })
  one?: number
  @Inject()
  provide!: string

  @Emit()
  child() {
    return '我是Hellow组件的数据'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
