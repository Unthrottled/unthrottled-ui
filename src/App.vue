<template>
  <div class="iAmRoot">
    <Navigation />
    <div class="main" id="main">
      <canvas
        id="backgroundImage"
        :width="backgroundWidth"
        :height="backgroundHeight"
      ></canvas>
      <div id="app">
        <transition mode="out-in" name="component-fade">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  height: 100%;
  margin: 0;
}

.iAmRoot {
  height: 100%;
}

.main {
  height: 100%;
}

#backgroundImage {
  position: absolute;
}

#app {
  margin: auto;
  text-align: center;
  height: 100%;
  max-width: 980px;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Navigation }
})
export default class App extends Vue {
  private backgroundWidth = 69;
  private backgroundHeight = 69;

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.updateSize();
    this.drawBackground();
  }

  private updateSize() {
    const mainCanvas = document.getElementById("main");
    if (mainCanvas) {
      const boundingRect = mainCanvas.getBoundingClientRect();
      this.backgroundHeight = boundingRect.height;
      this.backgroundWidth = boundingRect.width;
    }
  }

  private drawBackground() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const backgroundCanvas: any = document.getElementById("backgroundImage")!!;
    const ctx: CanvasRenderingContext2D = backgroundCanvas.getContext("2d")!!;
    console.log("drawing", this.backgroundWidth, this.backgroundHeight);
    ctx.clearRect(0, 0, this.backgroundWidth, this.backgroundHeight);
    ctx.beginPath();
    ctx.moveTo(0, this.backgroundHeight);
    ctx.quadraticCurveTo(
      this.backgroundWidth / 1.5,
      this.backgroundHeight,
      this.backgroundWidth,
      0
    );
    ctx.lineTo(this.backgroundWidth, this.backgroundHeight);
    ctx.fillStyle = "#262c32";
    ctx.strokeStyle = "#262c32";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    this.updateSize();
    this.drawBackground();
  }
}
</script>
