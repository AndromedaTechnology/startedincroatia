import { GetterTree } from "vuex";
import { RootState } from "../types";
import { LinkState, Link } from "./types";

export const getters: GetterTree<LinkState, RootState> = {
  isLoading(state): boolean | undefined {
    const { isLoading } = state;
    return isLoading;
  },
  links(state): Array<Link> | undefined {
    const { links } = state;
    return links;
  },
  getLink: (state) => (linkId: string): Link | undefined => {
    const { links } = state;
    return links?.find((item: Link) => {
      return item._id === linkId;
    });
  },
};
