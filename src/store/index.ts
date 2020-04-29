import Vue from "vue";
import Vuex from "vuex";
import Waifu from "@/store/modules/waifu";
import VuexPersistence from "vuex-persist";
import omit from "lodash/omit";
import Animations from "@/store/modules/animations";

Vue.use(Vuex);

interface StoreState {
  waifu: Waifu;
  animations: Animations;
}

const persist = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state: StoreState) => omit(state, ["animations"])
});

const store = new Vuex.Store<StoreState>({
  modules: {
    waifu: Waifu,
    animations: Animations
  },
  plugins: [persist.plugin]
});

export default store;
