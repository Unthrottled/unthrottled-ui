<template>
  <div class="home">
    <transition enter-class="fade-enter">
      <h1>Yeet!</h1>
    </transition>
  </div>
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
export default {
  name: "Home",
  components: {}
};
</script>
