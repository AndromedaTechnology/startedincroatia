<template>
  <div>
    <v-snackbar :value="isVisible" right :timeout="0" vertical class="pa-4">
      <div class="my-2 mx-1">
        <v-toolbar class="ma-0 pa-0">
          <v-toolbar-title class="d-inline-block">
            Add
            <code>{{ href }}</code>
            to the list?
          </v-toolbar-title>
        </v-toolbar>
        <v-row>
          <v-col cols="12" sm="6">
            <v-btn class="ma-0" @click="close" block>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn class="ma-0" @click="addLink" block color="green">
              <v-icon>mdi-check-all</v-icon>
              <h3>
                Add
              </h3>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import { Action } from "vuex-class";
import { Link } from "@/store/link/types";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "AddLink",
  mixins: [],
})
export default class AddLink extends Vue {
  @Prop({ type: String, default: null, required: true })
  href!: string;

  @Action("persistLink", { namespace: "link" })
  persistLink!: (href: string) => Promise<Link | undefined>;
  @Action("fetchLinks", { namespace: "link" })
  fetchLinks!: () => any;

  isVisible = true;
  async addLink() {
    await this.persistLink(this.href);
    this.fetchLinks();
    this.close();
  }
  close() {
    this.isVisible = false;
  }
}
</script>
