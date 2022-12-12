<template>
  <v-card text elevation="12" class="pa-8">
    <v-chip label large class="mb-4">
      <h1>
        Started in Croatia
      </h1>
    </v-chip>
    <v-container class="ma-0 pa-0">
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0" cols="12" sm="12">
          <v-progress-circular
            v-if="isLoading"
            indeterminate
            class="mx-auto"
            color="primary"
          ></v-progress-circular>
          <v-list v-else class="ma-0 pa-0">
            <Link
              v-for="(link, index) in links" :key="index"
              :link="link"
            />
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Link from "./Link.vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
@Component({
  name: "List",
  components: {
    Link,
  },
})
export default class List extends Vue {
  @Action("fetchLinks", { namespace: "link" })
  fetchLinks!: () => any;
  @Getter("links", { namespace: "link" })
  links: any;
  @Getter("isLoading", { namespace: "link" })
  isLoading: any;

  mounted() {
    this.fetchLinks();
  }
}
</script>
<style lang="scss" scoped>
</style>
