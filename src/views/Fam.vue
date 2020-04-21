<template>
  <div class="fam-container">
    <Ravioli ravioli="ravioli ravioli give me the formuoli" />
    <div class="fam"></div>
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
  background: url("https://doki.assets.unthrottled.io/backgrounds/miku.png")
    no-repeat center;
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
export default class Fam extends Vue {}
</script>
