<template>
  <div>
    <h1>{{ msgs }}</h1>
    <h1>{{ msg }}</h1>
    <button @click="child">我是Vue2组件按钮</button>
  </div>
</template>
<script>
import Vue from 'vue'
import myMixins from '../myMixins'
export default Vue.extend({
  inject: ['provide'],
  mixins: [myMixins],
  data() {
    return {}
  },
  computed: {
    msg: {
      get() {
        return `computed 属性: msg`
      },
    },
  },
  watch: {
    msgs: {
      handler(newVal, oldVal) {
        // console.log('OldVue2组件', '正在监听 oldVal', oldVal)
        // console.log('OldVue2组件', '正在监听 newVal', newVal)
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    // console.log('OldVue2组件', this.provide)
    // console.log('OldVue2组件', this.valueFromMixins)
  },
  props: { msgs: { type: String, default: '父组件没有传值' } },
  methods: {
    child() {
      this.$emit('child', '我是OldVue2组件的数据')
      this.$bus.$emit('old', '我是old')
    },
  },
})
/* export default {
  inject: ["provide"],
    mixins: [myMixins],
    computed: {
    msg () {
      return `computed 属性: msg`;
    }
  },
  watch: {
    msgs: {
      handler (newVal, oldVal) {
        console.log("OldVue2组件", "正在监听 oldVal", oldVal);
        console.log("OldVue2组件", "正在监听 newVal", newVal);
      },
      immediate: true,
      deep: true,
    },
  },
  mounted () {
    console.log("OldVue2组件", this.provide);
  },
  props: {
    msgs: {
      type: String,
      default: "父组件没有传值",
    },
  },
  methods: {
    child () {
      this.$emit("child", "我是OldVue2组件的数据");
    },
  },
} */
</script>
