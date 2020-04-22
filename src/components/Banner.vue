<template>
  <div>
    <transition name="fadeInUp">
      <div v-if="isMounted">
        <div class="hero-headline">
          Define your<br />
          own limits.
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
@Component
export default class Banner extends Vue {
  private isMounted = false;

  mounted() {
    setTimeout(() => (this.isMounted = true), 750);
  }
}
</script>

<style scoped>
.hero-subtext {
  font-size: 24px;
  font-weight: 700;
}
.hero-headline {
  margin-top: 5rem;
  font-size: 5rem;
  font-weight: 700;
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
