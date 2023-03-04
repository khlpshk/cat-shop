<template>
  <app-header></app-header>
  <div class="container" @wheel="scroll">
    <div class="container-wrapper">
      <router-view></router-view>
    </div>
    <!-- <app-button-up :isScrolling="scrollYpos > 0"/> -->
  </div>
  <the-footer />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import MainView from "@/views/Main.vue";
import AppButtonUp from "@/UI/AppButtonUp.vue";
import TheFooter from "@/components/TheFooter.vue";

import { mapActions } from "vuex";

export default {
  data() {
    return {
      scrollYpos: window.scrollY,
    };
  },
  methods: {
    ...mapActions("cats", ["getCats"]),
    scroll(event) {
      this.scrollYpos = window.scrollY;
    },
  },
  mounted() {
    this.getCats();
    window.addEventListener("scroll", this.scroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scroll);
  },
  components: {
    AppHeader,
    MainView,
    AppButtonUp,
    TheFooter,
  },
};
</script>

<style lang="sass">
button
  border: none
  background-color: none
  margin: 0
  padding: 0
*
  margin: 0
  padding: 0
  font-family: 'Montserrat', sans-serif
  font-style: normal

.container
  margin: 0 auto
  width: 90%
  @media screen and (max-width: 767px)
    margin-top: 90px
    padding-bottom: 20px
.container-wrapper
  margin: 37px 0 83px
  @media screen and (max-width: 767px)
    margin: 37px 0 20px
</style>
