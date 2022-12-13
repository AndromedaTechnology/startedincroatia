<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <Intro class="my-4"></Intro>
        <List class="my-4"></List>
        <Croatia class="my-4"></Croatia>
        <Info class="my-4"></Info>
        <AddLink
          v-if="false"
          :href="referrer"
        ></AddLink>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
import Info from "@/components/General/Info.vue";
import List from "../components/General/List.vue";
import Intro from "../components/General/Intro.vue";
import AddLink from "@/components/General/AddLink.vue";
import Croatia from "../components/General/Croatia.vue";
@Component({
  name: "Home",
  components: {
    Intro,
    Croatia,
    List,
    Info,
    AddLink,
  },
})
export default class Home extends Vue {

  mounted() {
    console.log("-Referrer", this.referrer);
    console.log("-Referrer-v2", this.referrer);
  }

  get referrer(): string | null {
    const native = document.referrer;
    const v2 = window?.frames?.top?.document.referrer;
    console.log("--ref", native, v2);
    return native ?? v2 ?? null;
  }

  playSoundNotification(isGood = true) {
    if (isGood) {
      const audio = new Audio("/audio/notificationGood.ogg");
      audio.play();
    } else {
      const audio = new Audio("/audio/notificationBad.ogg");
      audio.play();
    }
  }
}
</script>
<style lang="scss" scoped>
.cursorPointer {
  cursor: pointer;
}
</style>
