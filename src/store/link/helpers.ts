import { Link } from "./types";
import apiClient from "@/apiClient";

export class LinkHelper {
  /**
   * Fetch Links
   *
   * @returns {Promise<Array<Link> | undefined>}
   */
  public static async fetchLinks(): Promise<Array<Link> | undefined> {
    try {
      const response = await apiClient.get("/links");
      return response ? response.data : undefined;
    } catch (e) {
      return undefined;
    }
  }
  /**
   * Create Link
   *
   * @returns {Promise<Array<Link> | undefined>}
   */
  public static async createLink(href: string): Promise<Link | undefined> {
    try {
      const response = await apiClient.post("/links", {
        href,
      });
      return response ? response.data : undefined;
    } catch (e) {
      return undefined;
    }
  }
}
