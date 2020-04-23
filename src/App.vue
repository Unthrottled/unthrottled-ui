<template>
  <div>
    <div class="navContainer">
      <div id="nav">
        <div>
          Unthrottled
        </div>
        <span style="flex-grow: 0.5" />
        <div class="navLinks">
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/more">More</router-link>
          <router-link to="/waifus">Waifus</router-link>
        </div>
      </div>
    </div>
    <div id="app">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2b3238;
  color: #e6e6e6;
}

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

#nav {
  padding: 1rem;
  display: flex;
  a {
    font-weight: bold;
    color: #e6e6e6;

    &.router-link-exact-active {
      color: #a73035;
    }
  }
}
.navLinks {
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
}

.navContainer {
  background: #262b30;
  box-shadow: 0 -1px 2px 2px rgba(185, 32, 47, 0.27);
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
