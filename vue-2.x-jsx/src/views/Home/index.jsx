import Vue from 'vue'
import Component from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld/index'
import './index.scss'
@Component({
  components: { HelloWorld },
})
export default class Home extends Vue {
  render() {
    return (
      <div>
        <img src={require('@/assets/logo.png')} alt="Vue Logo" />
        <HelloWorld />
      </div>
    )
  }
}
