<template>
  <v-app>
    <v-app-bar app dark color="#121212" height="96">
      <v-spacer></v-spacer>
      <!-- Logo -->
      <div class="d-flex align-center">
        <router-link :to="{ name: 'home' }">
          <v-img
            v-if="false"
            alt="Habitus Logo"
            class="shrink mr-2 mt-4"
            contain
            src="/img/icons/logo.png"
            transition="scale-transition"
            width="40"
          />
          <h1 class="d-inline-block display-2">🇭🇷</h1>
          <h1 class="d-inline-block ml-4">Started in Croatia</h1>
        </router-link>
        <router-link v-if="false" :to="{ name: 'user' }" class="mt-4 mx-4">
          <v-icon x-large>face</v-icon>
        </router-link>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <router-view class="routerView" />
    <ServiceWorkerUpdate />
  </v-app>
</template>
<script lang="ts">
import { Action, Getter} from "vuex-class";
import { Component, Vue, Watch } from "vue-property-decorator";
import ServiceWorkerUpdate from "./components/General/ServiceWorkerUpdate.vue";
@Component({
  name: "App",
  components: {
    ServiceWorkerUpdate,
  },
})
export default class App extends Vue {
}
</script>
<style lang="scss" scoped>
.routerView {
  margin-top: 96px;
}
</style>