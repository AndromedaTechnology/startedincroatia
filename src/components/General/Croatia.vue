<template>
  <v-card text elevation="12" class="pa-8">
    <v-chip large label class="mb-4">
      <h1>Croatia</h1>
    </v-chip>
    <h3>
      <ul>
        <li>
          <a href="https://en.wikipedia.org/wiki/Croatia">
            Country in Europe
          </a>
        </li>
        <li>
          <a href="https://visitcroatia.com/">
            Stunning, Untouched coastline, sea, woods, mountains, ...
          </a>
        </li>
        <li>
          <a href="https://visitcroatia.com/">
            Good, open and proud people, great hosts
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/List_of_Croatian_inventions_and_discoveries">
            Home to many inventors: Nikola Tesla, ...
          </a>
        </li>
        <li>
          World-Class Technology Companies:
            <a href="https://photomath.com/">Photomath</a>,
            <a href="https://www.infobip.com/">Infobip</a>,
            <a href="https://www.rimac-automobili.com/">Rimac Automobili</a>,
            <a href="https://www.sofascore.com/">SofaScore</a>,
            ...
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Sport_in_Croatia">World-quality Athletes</a>
          :
            <a href="https://en.wikipedia.org/wiki/Janica_Kosteli%C4%87">Janica</a>
            and
            <a href="https://en.wikipedia.org/wiki/Ivica_Kosteli%C4%87">Ivica Kostelić</a>,
            <a href="https://www.youtube.com/watch?v=YcSkraurUyQ">Football</a>,
            <a href="https://www.youtube.com/watch?v=KgGX5lYwGcQ">Handball</a>,
            <a href="https://www.youtube.com/watch?v=6CItF1iPJ_c">Dražen Petrović</a>,
            <a href="https://www.youtube.com/watch?v=AgsHcZ0-T9M">Mirko Cro Cop</a>,
            ...
          </li>
        <li>Great Musicians:
          <a href="https://www.youtube.com/watch?v=5vqCoIIoznU&ab_channel=OliverDragojevi%C4%87CrorecOfficial">Oliver Dragojević</a>,
          <a href="https://www.youtube.com/watch?v=KbYgRXJmi6k&ab_channel=2CELLOS">2Chelllos</a>,
          <a href="https://www.youtube.com/watch?v=c4jg_dd_S_E">Dino Dvornik</a>,
          <a href="https://www.youtube.com/watch?v=YyQSBbxs-lM&ab_channel=CroatiaRecords">Goran Bare</a>,
          ...
        </li>
        <li>Amazing Students: <a href="https://hsin.hr/">World Champions in Algorithms</a>, Math and other fields</li>
        <li>And truly... Much more... Visit and fall in Love with Croatia and the people in it 😊</li>
      </ul>
    </h3>
    <div class="text-center my-4" v-if="false">
      <iframe class="ma-0" width="560" height="315" src="https://www.youtube.com/embed/c4jg_dd_S_E?t=480" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <iframe class="ma-0" width="560" height="315" src="https://www.youtube.com/embed/RVhzERp2WLM" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <iframe class="ma-0" width="560" height="315" src="https://www.youtube.com/embed/YcSkraurUyQ" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <iframe class="ma-0" width="560" height="315" src="https://www.youtube.com/embed/0Ory4oifR_U" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
@Component({
  name: "Croatia",
  components: {
    //
  },
})
export default class Croatia extends Vue {
//
}
</script>
<style lang="scss" scoped>
</style>
