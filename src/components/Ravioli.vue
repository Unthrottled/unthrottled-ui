<template>
  <div>
    <div>Fam {{ ravioli }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Ravioli extends Vue {
  @Prop() private ravioli!: string;
}
</script>

<style scoped></style>
