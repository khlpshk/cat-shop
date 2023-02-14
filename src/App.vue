<template>
  <div class="lock">
    <app-header></app-header>
    <div class="container">
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import MainView from "@/views/Main.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    AppHeader,
    MainView,
    TheFooter,
  },
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  font-family: 'Montserrat', sans-serif
  font-style: normal
#app
  overflow-y: hidden

.container
  margin: 0 auto
  // padding: 37px 0 83px
  width: 90%
  @media screen and (max-width: 767px)
    margin-top: 90px
.wrapper
  margin: 37px 0
</style>
