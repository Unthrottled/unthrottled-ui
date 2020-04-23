<template>
  <div class="navContainer">
    <div id="nav">
      <span v-if="!isMounted" style="opacity: 0">John Cena</span>
      <transition style="position: absolute" name="fade">
        <div class="navTransition" v-if="isMounted">
          <router-link to="/">
            Unthrottled
          </router-link>
          <span style="flex-grow: 0.5" />
          <div class="navLinks">
            <router-link to="/products">Products</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/more">More</router-link>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Navigation extends Vue {
  private isMounted = false;

  mounted() {
    setTimeout(() => (this.isMounted = true), 2000);
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#nav {
  padding: 1rem;
  a {
    color: #f5f5f7;
    text-decoration: none;
    font-weight: 100;

    &.router-link-exact-active {
      color: #a73035;
      font-weight: 500;
    }
  }
}

.navTransition {
  display: flex;
}

.navLinks {
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
}

.navContainer {
  background: #262b30;
  box-shadow: 0 0 1px 1px rgba(185, 32, 47, 0.27);
}
</style>
