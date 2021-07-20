import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import AboutVuexModule from '@/store/modules/About'
const AboutModule = getModule(AboutVuexModule)
import AboutStyle from './index.module.scss'

@Component({})
export default class About extends Vue {
  render() {
    return (
      <div class={AboutStyle.about}>
        <h1>{AboutModule.msg}</h1>
      </div>
    )
  }
}
