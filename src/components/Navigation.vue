<template>
  <div>
    <div class="johnCena nav">
      <router-link class="brand" to="/"> Unthrottled </router-link>
    </div>
    <div class="navContainer">
      <div id="nav">
        <transition name="fade" style="position: absolute">
          <div class="navTransition">
            <router-link class="brand" to="/"> Unthrottled </router-link>
            <span style="flex-grow: 0.5" />
            <div class="navLinks">
              <div class="navigationTab">
                <router-link class="navigationLink" to="/products"
                  ><span class="navigationLinkText">Products</span>
                  <div class="routerIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.37 4L10.78 6.5L9.37 9H6.63L5.23 6.5L6.63 4H9.37M10.25 2H5.75C5.56 2 5.39 2.11 5.31 2.26L3.09 6.22L3 6.5L3.09 6.78L5.31 10.74C5.39 10.89 5.56 11 5.75 11H10.25C10.44 11 10.61 10.89 10.69 10.74L12.91 6.78L13 6.5L12.91 6.22L10.69 2.26C10.61 2.11 10.44 2 10.25 2M18.62 9.5L20 12L18.62 14.5H15.88L14.5 12L15.88 9.5H18.62M19.5 7.5H15C14.81 7.5 14.64 7.61 14.56 7.76L12.34 11.72L12.25 12L12.34 12.28L14.56 16.24C14.64 16.39 14.81 16.5 15 16.5H19.5C19.69 16.5 19.86 16.39 19.94 16.24L22.16 12.28L22.25 12L22.16 11.72L19.94 7.76C19.86 7.61 19.69 7.5 19.5 7.5M9.37 15L10.78 17.5L9.37 20H6.63L5.23 17.5L6.63 15H9.37M10.25 13H5.75C5.56 13 5.39 13.11 5.31 13.26L3.09 17.22L3 17.5L3.09 17.78L5.31 21.74C5.39 21.89 5.56 22 5.75 22H10.25C10.44 22 10.61 21.89 10.69 21.74L12.91 17.78L13 17.5L12.91 17.22L10.69 13.26C10.61 13.11 10.44 13 10.25 13Z"
                      />
                    </svg>
                  </div>
                </router-link>
              </div>
              <div class="navigationTab">
                <router-link class="navigationLink" to="/capabilities"
                  ><span class="navigationLinkText">Capabilities</span>
                  <div class="routerIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17,22V20H20V17H22V20.5C22,20.89 21.84,21.24 21.54,21.54C21.24,21.84 20.89,22 20.5,22H17M7,22H3.5C3.11,22 2.76,21.84 2.46,21.54C2.16,21.24 2,20.89 2,20.5V17H4V20H7V22M17,2H20.5C20.89,2 21.24,2.16 21.54,2.46C21.84,2.76 22,3.11 22,3.5V7H20V4H17V2M7,2V4H4V7H2V3.5C2,3.11 2.16,2.76 2.46,2.46C2.76,2.16 3.11,2 3.5,2H7M13,17.25L17,14.95V10.36L13,12.66V17.25M12,10.92L16,8.63L12,6.28L8,8.63L12,10.92M7,14.95L11,17.25V12.66L7,10.36V14.95M18.23,7.59C18.73,7.91 19,8.34 19,8.91V15.23C19,15.8 18.73,16.23 18.23,16.55L12.75,19.73C12.25,20.05 11.75,20.05 11.25,19.73L5.77,16.55C5.27,16.23 5,15.8 5,15.23V8.91C5,8.34 5.27,7.91 5.77,7.59L11.25,4.41C11.5,4.28 11.75,4.22 12,4.22C12.25,4.22 12.5,4.28 12.75,4.41L18.23,7.59Z"
                      />
                    </svg>
                  </div>
                </router-link>
              </div>
              <div class="navigationTab">
                <router-link class="navigationLink" to="/values">
                  <span class="navigationLinkText">Values</span>
                  <div class="routerIcon">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
</svg>
                  </div>
                </router-link>
              </div>
              <div class="navigationTab">
                <router-link class="navigationLink" to="/contact">
                  <span class="navigationLinkText">Contact</span>
                  <div class="routerIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z"
                      />
                    </svg>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
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

.navigationLinkText {
  margin: auto;
}

.navigationLink {
  margin: auto;
  display: flex;
}

.navigationTab {
  display: flex;
}

.routerIcon {
  margin-left: 0.35rem;
}

.brand {
  margin: auto 0 auto 0.5rem;
  font-weight: 500 !important;
}

#nav,
.nav {
  padding: 0.6rem 1rem;

  a {
    color: #f5f5f7;
    text-decoration: none;
    font-weight: 200;

    svg {
      fill: #f5f5f7;
      vertical-align: middle;
    }

    &.router-link-exact-active {
      color: #a73035;
    }
    &.router-link-exact-active svg {
      fill: #a73035;
    }
  }
}



.navTransition {
  display: flex;
  margin: auto;
  max-width: 980px;
}

.navLinks {
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
}

.johnCena {
  opacity: 0;
}

.navContainer {
  top: 0;
  z-index: 9001;
  position: fixed;
  width: 100%;
  background: #262b30;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
