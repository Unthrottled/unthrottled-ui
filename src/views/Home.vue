<template>
  <Layout>
    <div class="brandContainer">
      <span style="opacity: 0">and his name is John Cena!</span>
      <Banner :on-animate="onBannerDisplay" />
      <transition appear name="fade" v-on:after-enter="excerptShown">
        <h1 class="excerpt" v-if="bannerDisplayed">
          Focus on what is important<br />
          and demand excellence.
        </h1>
      </transition>
      <transition appear name="fade" v-on:after-enter="triggerClosingLineShown">
        <h1 class="excerpt" v-if="exceptShown">
          Deliver amazing value.
        </h1>
      </transition>
      <transition appear name="fade">
        <p class="preachySpeachy" v-if="closingLineShown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          purus gravida quis blandit turpis cursus in hac. Sit amet mauris
          commodo quis imperdiet. Bibendum est ultricies integer quis auctor
          elit. Ultrices neque ornare aenean euismod elementum nisi quis. Aenean
          et tortor at risus. Augue mauris augue neque gravida in fermentum et
          sollicitudin. Integer quis auctor elit sed vulputate mi. Ultrices
          vitae auctor eu augue ut lectus arcu bibendum at. Nulla porttitor
          massa id neque aliquam vestibulum morbi. Scelerisque in dictum non
          consectetur. Purus viverra accumsan in nisl nisi scelerisque. Semper
          quis lectus nulla at volutpat. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames. Bibendum enim facilisis gravida
          neque convallis a cras semper. Aliquet risus feugiat in ante metus
          dictum at tempor commodo. Amet consectetur adipiscing elit ut aliquam.
          Libero volutpat sed cras ornare arcu dui vivamus. Ut etiam sit amet
          nisl purus in mollis nunc sed.
        </p>
      </transition>
    </div>
  </Layout>
</template>

<style lang="scss">
.brandContainer {
  margin: auto;
  max-width: 500px;
}

.excerpt {
  margin-top: 3rem;
}

.preachySpeachy {
  margin-top: 3rem;
  font-size: 22px;
  line-height: 2rem;
  font-weight: 400;
  color: #b2b2b4;
}
</style>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import Component from "vue-class-component";
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import { namespace } from "vuex-class";

const Animations = namespace("animations");

@Component({
  components: {
    Layout,
    Banner: Banner
  }
})
export default class Home extends Vue {
  @Animations.State
  private bannerDisplayed!: boolean;
  @Animations.Mutation
  private setBannerDisplayed!: (value: boolean) => void;
  @Animations.State
  private exceptShown!: boolean;
  @Animations.Mutation
  private setExceptShown!: (value: boolean) => void;
  @Animations.State
  private closingLineShown!: boolean;
  @Animations.Mutation
  private setClosingLineShown!: (value: boolean) => void;

  private excerptShown() {
    setTimeout(() => this.setExceptShown(true), 1000);
  }
  private triggerClosingLineShown() {
    setTimeout(() => this.setClosingLineShown(true), 500);
  }

  private onBannerDisplay() {
    setTimeout(() => this.setBannerDisplayed(true), 250);
  }
}
</script>
