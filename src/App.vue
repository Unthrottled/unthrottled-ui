<template>
  <div class="iAmRoot">
    <Navigation />
    <div id="primary-container">
      <canvas
        id="backgroundImage"
        :width="backgroundWidth"
        :height="backgroundHeight"
      ></canvas>
      <main class="main" id="app">
        <transition mode="out-in" name="component-fade">
          <router-view />
        </transition>
      </main>
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

#primary-container {
  height: 100%;
}

.main {
  height: 100%;
  padding: 0.75rem;
}

#backgroundImage {
  position: fixed;
  z-index: -1;
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
  private backgroundWidth = 500;
  private backgroundHeight = 500;

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.performBackgroundUpdate();
  }

  private performBackgroundUpdate() {
    this.updateSize();
    this.$nextTick(() => this.drawBackground());
  }

  private updateSize() {
    const mainCanvas = document.getElementById("primary-container");
    if (mainCanvas) {
      const boundingRect = mainCanvas.getBoundingClientRect();
      this.backgroundHeight = boundingRect.height;
      this.backgroundWidth = boundingRect.width;
    }
  }

  private drawBackground() {
    const backgroundCanvas = document.getElementById(
      "backgroundImage"
    ) as HTMLCanvasElement;
    const ctx = backgroundCanvas.getContext("2d");
    if (!ctx) return;
    const w = this.backgroundWidth;
    const h = this.backgroundHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(0, h * 0.85);
    ctx.quadraticCurveTo(w / 1.85, h, w, h / 2);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fillStyle = "#282f35";
    ctx.strokeStyle = "#282F35";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    this.performBackgroundUpdate();
  }
}
</script>
