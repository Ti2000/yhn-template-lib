import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
@Module({ dynamic: true, store, namespaced: true, name: 'About' })
export default class AboutModule extends VuexModule {
  public msg: string = '当前值是Vuex的msg'

  @Mutation
  setMsg(msg: string) {
    this.msg = msg
  }

  @Action
  setMutationMsg(msg: string) {
    this.context.commit('setMsg', msg)
  }
}
