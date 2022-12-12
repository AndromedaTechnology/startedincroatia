import { ActionTree } from "vuex";
import { RootState } from "../types";
import { LinkHelper } from "./helpers";
import { LinkState, Link } from "./types";

export const actions: ActionTree<LinkState, RootState> = {
  async fetchLinks({ commit }): Promise<Array<Link> | undefined> {
    commit("setLinks", []);
    commit("isLoading", true);
    const items = await LinkHelper.fetchLinks();
    commit("isLoading", false);
    commit("setLinks", items);
    return Promise.resolve(items);
  },
  async persistLink(
    { state, getters, commit },
    href: string
  ): Promise<Link | undefined> {
    const link = await LinkHelper.createLink(href);
    commit("addLink", link);
    return Promise.resolve(link);
  },
  updateLink(
    { state, getters, commit },
    payload: { linkId: Link; data: Link }
  ): any {
    commit("updateLink", {
      linkId: payload.linkId,
      data: payload.data,
    });
  },
  deleteLink({ getters, commit }, link: Link): any {
    commit("removeLink", link._id);
  },
  deleteLinks({ commit }): any {
    commit("removeLinks");
  },
};
