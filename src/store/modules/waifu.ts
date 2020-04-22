import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

export enum Wafius {
  MIKU = "miku",
  RYUKO = "ryuko",
  SATSUKI = "satsuki",
  MEGUMIN = "megumin",
  REM = "rem",
  IBUKI = "ibuki",
  EMILIA_LIGHT = "emilia_light",
  EMILIA_DARK = "emilia_dark"
}

@Module({ namespaced: true, name: "waifu" })
export default class Waifu extends VuexModule {
  public currentWaifu: Wafius = Wafius.RYUKO;

  @Mutation
  public setWaifu(newWaifu: Wafius): void {
    this.currentWaifu = newWaifu;
  }

  @Action
  public updateWaifu(newWaifu: Wafius): void {
    this.context.commit("setWaifu", newWaifu);
  }
}
