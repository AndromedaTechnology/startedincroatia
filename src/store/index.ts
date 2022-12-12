import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { RootState } from "./types";
import { link } from "./link/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    link,
  },
};

export default new Vuex.Store<RootState>(store);
