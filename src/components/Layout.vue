<template>
  <div class="layoutContainer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Layout extends Vue {}
</script>

<style lang="scss">
.layoutContainer {
  padding-top: 1rem;
}
</style>
