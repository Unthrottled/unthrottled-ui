<template>
  <div class="fam-container">
    <Ravioli ravioli="ravioli ravioli give me the formuoli" />
    <button v-on:click="updateImage">Cycle Gril</button>
    <div :style="{ backgroundImage: gril() }" class="fam"></div>
  </div>
</template>

<style scoped>
.fam-container {
  height: 100%;
}
.fam {
  background-size: cover;
  content: "";
  z-index: 99999;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Ravioli from "@/components/Ravioli.vue";

@Component({
  components: { Ravioli }
})
export default class Fam extends Vue {
  private grils = ["miku", "rem", "ibuki", "emilia_light", "emilia_dark"];
  private currentGril = 0;

  gril(): string {
    return `url("https://doki.assets.unthrottled.io/backgrounds/${
      this.grils[this.currentGril]
    }.png")`;
  }
  updateImage() {
    this.currentGril = (this.currentGril + 1) % this.grils.length;
  }
}
</script>
