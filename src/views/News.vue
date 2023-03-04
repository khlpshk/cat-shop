<template>
  <app-go-back-btn />
  <router-view></router-view>
</template>

<script>
import AppGoBackBtn from "@/UI/AppGoBackBtn.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { AppGoBackBtn },
  mounted() {
    this.getNews();
  },
  methods: {
    ...mapActions('news', ['getNews'])
  },
};
</script>

<style lang="sass" scoped>
.news-cards
  display: flex
  flex-direction: column
  justify-content: center

  &__item
    margin: 0 auto 20px
</style>
