<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-alert text>
          <h3>
            Firstly, add
            <code class="mt-2">
              <h4 class="d-inline-block">
                <a href="https://startedincroatia.com">
                  🇭🇷 Started in Croatia
                </a>
              </h4>
            </code>
            to your page.
          </h3>
          <h3>Then, add the link of your site to the input below 👇</h3>
          <v-row>
            <v-col cols="12" sm="9">
              <v-text-field v-model="href" placeholder="URL of your site"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-btn block x-large @click="addLink">Add</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { Link } from "@/store/link/types";
import { Action, Getter } from "vuex-class";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component({
  name: "LinkInput",
  components: {
    //
  },
})
export default class LinkInput extends Vue {
  href: string | null = null;

  @Action("persistLink", { namespace: "link" })
  persistLink!: (href: string) => Promise<Link | undefined>;
  @Action("fetchLinks", { namespace: "link" })
  fetchLinks!: () => any;

  async addLink() {
    if (!this.href) return;
    await this.persistLink(this.href);
    this.fetchLinks();
    this.clear();
  }
  clear() {
    this.href = null;
  }
}
</script>
<style lang="scss" scoped>
</style>
