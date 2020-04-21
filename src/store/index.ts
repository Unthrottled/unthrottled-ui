import Vue from "vue";
import Vuex from "vuex";
import Waifu from "@/store/modules/waifu";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Waifu
  }
});
