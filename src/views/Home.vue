<template>
  <Layout>
    <div class="home">
      <span style="opacity: 0">and his name is John Cena!</span>
      <Banner :on-animate="onBannerDisplay" />
      <transition appear name="fade">
        <h1 v-if="bannerDisplayed">Demand Excellence</h1>
      </transition>
    </div>
  </Layout>
</template>

<style lang="scss"></style>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import Component from "vue-class-component";
import Vue from "vue";
import Layout from "@/components/Layout.vue";

@Component({
  components: {
    Layout,
    Banner: Banner
  }
})
export default class Home extends Vue {
  private bannerDisplayed = false;
  private onBannerDisplay() {
    setTimeout(() => (this.bannerDisplayed = true), 250);
  }
}
</script>
