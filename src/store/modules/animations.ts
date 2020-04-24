import { Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ namespaced: true, name: "animations" })
export default class Animations extends VuexModule {
  private brandAnimationStarted = false;
  private bannerDisplayed = false;
  private exceptShown = false;
  private closingLineShown = false;

  @Mutation
  public setBrandAnimationStarted(newBrandAnimationStarted: boolean) {
    this.brandAnimationStarted = newBrandAnimationStarted;
  }

  @Mutation
  public setBannerDisplayed(newBannerDisplayed: boolean) {
    this.bannerDisplayed = newBannerDisplayed;
  }

  @Mutation
  public setExceptShown(newExceptShown: boolean) {
    this.exceptShown = newExceptShown;
  }

  @Mutation
  public setClosingLineShown(newClosingLineShown: boolean) {
    this.closingLineShown = newClosingLineShown;
  }
}
