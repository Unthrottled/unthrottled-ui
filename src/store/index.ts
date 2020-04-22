import Vue from "vue";
import Vuex from "vuex";
import Waifu from "@/store/modules/waifu";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const persist = new VuexPersistence({
  storage: window.localStorage
});

const store = new Vuex.Store({
  modules: {
    waifu: Waifu
  },
  plugins: [persist.plugin]
});

export default store;
