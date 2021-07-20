import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld';

import { getModule } from 'vuex-module-decorators'
import HomeVuexModule from '@/store/modules/Home'

const HomeModule = getModule(HomeVuexModule)

import HomeStyle from './index.module.scss'

@Component({
  components: { HelloWorld },
})
export default class Home extends Vue {
  VuexChange() {
    HomeModule.setMutationMsg('我是修改之后的值')
  }
  render() {
    return (
      <div class={HomeStyle.home}>
        <img alt="Vue logo" src={require('@/assets/logo.png')} />
        <button onClick={this.VuexChange}>修改</button>
        <div>{HomeModule.msg}</div>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    )
  }
}
