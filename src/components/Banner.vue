<template>
  <Layout>
    <transition name="fadeInUp" v-on:after-enter="onAnimate">
      <div v-if="brandAnimationStarted">
        <div class="hero-headline">
          Define your<br />
          own limits.
        </div>
      </div>
    </transition>
  </Layout>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import { Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";

const Animations = namespace("animations");
@Component({
  components: { Layout }
})
export default class Banner extends Vue {
  @Animations.State
  private brandAnimationStarted!: boolean;
  @Animations.Mutation
  private setBrandAnimationStarted!: (value: boolean) => void;

  @Prop()
  private onAnimate!: () => void;

  mounted() {
    setTimeout(() => {
      this.setBrandAnimationStarted(true);
    }, 250);
  }
}
</script>

<style scoped>
.hero-subtext {
  font-size: 24px;
  font-weight: 700;
}
.hero-headline {
  font-size: 5rem;
  margin-top: 2rem;
  font-weight: 700;
  color: #fff;
}
@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.fadeInUp-enter-active {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
}
</style>
