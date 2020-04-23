<template>
  <div>
    <Navigation />
    <div id="app">
      <transition mode="out-in" name="component-fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
body {
  height: 100%;
  margin: 0;
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
export default class App extends Vue {}
</script>
