<template>
  <v-card text elevation="12" class="pa-8">
    <h3>
      <v-chip large label class="mb-4">
        <h1>Why</h1>
      </v-chip>
      <ol>
        <li>
          🦄 To show the best of Croatia
        </li>
        <li>
          👩‍👦 To attract even more smart and good people into Croatia
        </li>
        <li>
          🤩 To motivate Croatians to create and support each other
        </li>
      </ol>
    </h3>
    <h3 class="mt-8" v-if="false">
      <h2>
        <v-chip large label class="my-4">
          <h1>
            How
          </h1>
        </v-chip>
        to get listed here
      </h2>
      <ol>
        <li>
          🔗 Add a link to any page on the Internet that you own or contribute to
        </li>
        <li>
          🚀 Add a link to the input below
        </li>
        <li>
          ✅ Done! You are listed here!
        </li>
      </ol>
    </h3>
    <h3 class="mt-8">
      <h2>
        <v-chip label large class="my-4">
          <h1>
            What
          </h1>
        </v-chip>
        can be listed here</h2>
      <ul>
        <li>🧑‍💻 Your GitHub repo - Add link to your README.md file</li>
        <li>🕸 Your Project site - 🎉 Festivals, 🥁 Bands, 🖥 Software, ♧ Businesses, 💐 Places, ...</li>
      </ul>
    </h3>
    <h3 class="mt-8" v-if="false">
      <h2 class="my-4">
        <v-chip label large>
          <h1>
            Link
          </h1>
        </v-chip>
        to add on your site</h2>
      <code class="mt-2">
        <h2 class="d-inline-block">
          <a :href="link">
            🇭🇷 Started in Croatia
          </a>
        </h2>
      </code>
    </h3>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
@Component({
  name: "Intro",
  components: {
    //
  },
})
export default class Intro extends Vue {

  /**
   * TODO: Update based on env
   */
  get link(): string {
    // return "http://localhost:8081";
    return "https://startedincroatia.com";
  }
}
</script>
<style lang="scss" scoped>
</style>
