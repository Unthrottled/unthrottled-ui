<template>
  <div class="fam-container">
    <h2 style="color: #2c3e50" v-if="vewyCheeky">Vewy Cheeky</h2>
    <label>
      <input type="text" v-model="userInput" />
    </label>
    <Ravioli :ravioli="userInput" @formuoli="updateImage" />
    <h3>Current Waifu: {{ displayGril }}</h3>
    <h3 style="color: red" v-if="displayGril === 'ryuko'">Best Waifu</h3>
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
import { Component, Watch } from "vue-property-decorator";
import Ravioli from "@/components/Ravioli.vue";
import { Wafius } from "@/store/modules/waifu";
import { namespace } from "vuex-class";
import capitalize from "lodash/capitalize";

const Waifu = namespace("WaifuModule");

const grils = [
  Wafius.RYUKO,
  Wafius.MIKU,
  Wafius.SATSUKI,
  Wafius.MEGUMIN,
  Wafius.REM,
  Wafius.IBUKI,
  Wafius.EMILIA_LIGHT,
  Wafius.EMILIA_DARK
];

@Component({
  components: { Ravioli }
})
export default class Fam extends Vue {
  userInput = "";
  @Waifu.State
  public currentWaifu!: Wafius;
  private currentGril = 0;
  private vewyCheeky = false;

  @Waifu.Action
  public updateWaifu!: (newWaifu: Wafius) => void;

  mounted() {
    this.currentGril = grils.indexOf(this.currentWaifu);
  }

  get displayGril(): string {
    return capitalize(this.currentWaifu.split("_")[0]);
  }

  gril(): string {
    return `url("https://doki.assets.unthrottled.io/backgrounds/${this.currentWaifu}.png")`;
  }

  updateImage() {
    this.currentGril = (this.currentGril + 1) % grils.length;
    this.updateWaifu(grils[this.currentGril]);
  }

  @Watch("userInput")
  private userInputChanged(userInput: string) {
    this.vewyCheeky = userInput.toUpperCase() === "RAVIOLI RAVIOLI";
  }
}
</script>
