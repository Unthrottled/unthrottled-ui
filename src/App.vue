<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/more">More</router-link> |
      <router-link to="/waifus">Waifus</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100%;
}

#app {
  text-align: center;
  height: 100%;
  max-width: 980px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
