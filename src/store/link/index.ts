import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { LinkState, Link } from "./types";
import { RootState } from "../types";

export const state: LinkState = {
  links: Array<Link>(),
  isLoading: false,
};

const namespaced = true;

export const link: Module<LinkState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
