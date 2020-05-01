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
          Why would you settle for anything less?<br /><br />
          Never let anything prevent the success of your goals. What you want to
          do is possible given time and effort. However, let's be real with each
          other. Nobody will ever be able to dance barefoot on the surface of
          neutron star and live to tell about it. With that said, anything is
          possible, <span class="highlight">within reason</span>.
          <em
            >Do let me know if somebody figures out dancing on a dead star
            though.</em
          >
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

.highlight {
  color: #fff;
  font-weight: 500;
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
    setTimeout(() => this.setExceptShown(true), 1500);
  }
  private triggerClosingLineShown() {
    setTimeout(() => this.setClosingLineShown(true), 1750);
  }

  private onBannerDisplay() {
    setTimeout(() => this.setBannerDisplayed(true), 1000);
  }
}
</script>
