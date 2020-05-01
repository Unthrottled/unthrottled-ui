<template>
  <Layout>
    <div class="home"></div>
  </Layout>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import Layout from "../components/Layout";
export default {
  name: "Home",
  components: { Layout }
};
</script>
