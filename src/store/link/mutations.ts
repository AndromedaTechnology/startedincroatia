import { MutationTree } from "vuex";
import { LinkState, Link } from "./types";

export const mutations: MutationTree<LinkState> = {
  isLoading(state, payload = false) {
    state.isLoading = payload;
  },
  setLinks(state, payload: Array<Link>) {
    state.links = payload;
  },
  addLink(state, payload: Link) {
    state.links = [...state.links, payload];
  },
  updateLink(state, payload: { linkId: string; data: any }) {
    state.links = state.links?.map((el: Link) => {
      if (el._id === payload.linkId) {
        el = {
          ...el,
          ...payload.data,
        };
      }
      return el;
    });
  },
  removeLink(state, linkId: string) {
    state.links = state.links?.filter((el: Link) => {
      return el._id !== linkId;
    });
  },
  removeLinks(state, linkId: string) {
    state.links = [];
  },
};
