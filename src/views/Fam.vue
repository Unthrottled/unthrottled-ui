<template>
  <div class="fam-container">
    <p>{{ holderValue }}</p>
    <h2 style="color: #2c3e50" v-if="vewyCheeky">Vewy Cheeky</h2>
    <label>
      <input v-model="userInput" type="text" />
    </label>
    <Ravioli :ravioli="userInput" @formuoli="updateImage" />
    <h3>{{ displayGril.toUpperCase() }}</h3>
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
import { Component, Model, Watch } from "vue-property-decorator";
import Ravioli from "@/components/Ravioli.vue";

@Component({
  components: { Ravioli }
})
export default class Fam extends Vue {
  private grils = [
    "miku",
    "ryuko",
    "satsuki",
    "megumin",
    "rem",
    "ibuki",
    "emilia_light",
    "emilia_dark"
  ];
  private currentGril = 0;

  private vewyCheeky = false;
  private holderValue = "";

  $mount(elementOrSelector?: Element | string, hydrating?: boolean): this {
    this.holderValue = this.displayGril;
    return super.$mount(elementOrSelector, hydrating);
  }

  get displayGril(): string {
    return this.grils[this.currentGril];
  }

  @Model()
  userInput = "";

  @Watch("userInput")
  private userInputChanged(userInput: string) {
    this.vewyCheeky = userInput.toUpperCase() === "RAVIOLI RAVIOLI";
  }

  gril(): string {
    return `url("https://doki.assets.unthrottled.io/backgrounds/${this.displayGril}.png")`;
  }
  updateImage() {
    this.currentGril = (this.currentGril + 1) % this.grils.length;
  }
}
</script>
