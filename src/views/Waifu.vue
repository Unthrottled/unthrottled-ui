<template>
  <div class="waifu-container">
    <h2 style="color: #2c3e50" v-if="vewyCheeky">Vewy Cheeky</h2>
    <label style="display: none">
      <input type="text" v-model="userInput" />
    </label>
    <button v-on:click="updateImage">Next Wafiu</button>
    <h3>Current Waifu: {{ displayGril }}</h3>
    <h3 style="color: red" v-if="displayGril === 'Ryuko'">Best Girl</h3>
    <div :style="{ backgroundImage: gril() }" class="waifu"></div>
  </div>
</template>

<style scoped>
.waifu-container {
  height: 100%;
}

.waifu {
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
import { Component, Watch } from "vue-property-decorator";
import { Wafius } from "@/store/modules/waifu";
import { namespace } from "vuex-class";
import capitalize from "lodash/capitalize";

const Waifu = namespace("waifu");

const grils = [
  Wafius.RYUKO,
  Wafius.MIKU,
  Wafius.REM,
  Wafius.IBUKI,
  Wafius.EMILIA_LIGHT,
  Wafius.SATSUKI,
  Wafius.MEGUMIN,
  Wafius.EMILIA_DARK
];

@Component
export default class Fam extends Vue {
  userInput = "";
  @Waifu.State
  public currentWaifu!: Wafius;
  @Waifu.Mutation
  public setWaifu!: (newWaifu: Wafius) => void;
  private currentGril = 0;
  private vewyCheeky = false;

  get displayGril(): string {
    return capitalize(this.currentWaifu.split("_")[0]);
  }

  mounted() {
    this.currentGril = grils.indexOf(this.currentWaifu);
  }

  gril(): string {
    return `url("https://doki.assets.unthrottled.io/backgrounds/${this.currentWaifu}.png")`;
  }

  updateImage() {
    this.currentGril = (this.currentGril + 1) % grils.length;
    this.setWaifu(grils[this.currentGril]);
  }

  @Watch("userInput")
  private userInputChanged(userInput: string) {
    this.vewyCheeky = userInput.toUpperCase() === "RAVIOLI RAVIOLI";
  }
}
</script>
