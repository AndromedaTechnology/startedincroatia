<template>
  <v-list-item v-if="link.href && link.name" :href="link.href">
    <v-list-item-avatar>
      <v-img :src="imgSrc"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-text="link.name"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts">
import Vue from "vue";
import { Action, Getter } from "vuex-class";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Link as LinkObj } from "@/store/link/types";
@Component({
  name: "Link",
  components: {
    //
  },
})
export default class Link extends Vue {
  @Prop({ type: Object, default: null, required: true })
  link!: LinkObj;

  get imgSrc() {
    return this.link.favicon_url ?? this.link.avatar_url;
  }
}
</script>
<style lang="scss" scoped>
</style>
