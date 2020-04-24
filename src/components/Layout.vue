<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Layout extends Vue {}
</script>

<style scoped></style>
