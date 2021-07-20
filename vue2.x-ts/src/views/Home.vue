<template>
  <div class="home">
    <HelloWorld :msgs="msgs" @child="child" :one="1" two="2" />
    <OldVue2 :msgs="msgs" @child="child" :one="1" two="2" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import HelloWorld from '../components/HelloWorld.vue' // @ is an alias to /src
import OldVue2 from '../components/oldvue2.vue' // @ is an alias to /src
@Component({
  components: { HelloWorld, OldVue2 },
})
export default class Home extends Vue {
  msgs = '我是父组件传给子组件的数据'
  mounted() {
    setTimeout(() => {
      this.msgs = '第二次给子组件传值'
    }, 2000)
  }

  @Provide()
  provide = '我是Provide'

  child(n: string) {
    // console.log('父组件接受到子组件的数据：' + n)
  }
}
</script>
