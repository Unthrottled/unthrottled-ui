<template>
  <div>
    <div>
      {{ ravioli }}
      <button v-on:click="giveMeTheFormuoli">give me the formuoli</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Ravioli extends Vue {
  @Prop() private ravioli!: string;

  @Emit("formuoli")
  private giveMeTheFormuoli() {
    //
  }
}
</script>

<style scoped></style>
