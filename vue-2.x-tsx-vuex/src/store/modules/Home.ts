import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
@Module({ dynamic: true, store, namespaced: true, name: 'Home' })
export default class HomeModule extends VuexModule {
  public msg: string = '未改变'

  @Mutation
  setMsg(msg: string) {
    this.msg = msg
  }

  @Action
  setMutationMsg(msg: string) {
    this.context.commit('setMsg', msg)
  }
}
