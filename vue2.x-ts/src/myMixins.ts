import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class myMixins extends Vue {
  valueFromMixins: string = '来自mixins的value'
}
