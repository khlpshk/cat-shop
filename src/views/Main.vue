<template>
  <div class="cl" v-if="isCatsLoading">
    <app-loader />
  </div>
  <div v-else class="main-page">
    <div class="main-page__sort-form">
      <the-sort-form @sort-by-price="sortByPrice" @sort-by-age="sortByAge" />
    </div>
    <div class="main-page__cat-list">
      <app-cat-list :catList="catsOnPage" />
    </div>

    <button class="load-more-btn" @click="loadMoreCats">Показать ещё {{ limit }}</button>
  </div>
</template>

<script>
import AppLoader from "@/UI/AppLoader.vue";
import TheSortForm from "@/components/TheSortForm.vue";
import AppCatList from "@/components/AppCatList.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      page: 0,
      limit: 20,
    };
  },
  components: { AppLoader, AppCatList, TheSortForm },
  computed: {
    ...mapGetters("cats", ["cats", "catsCount", "isCatsLoading"]),
    catsOnPage() {
      return this.cats.slice(0, this.limit*(this.page + 1))
    },
  },
  methods: {
    ...mapActions("cats", ["sortByPrice", "sortByAge"]),
    loadMoreCats() {
      this.page++;
    }
  },
};
</script>

<style lang="sass" scoped>
.main-page
  &__sort-form
    margin-bottom: 38px
  &__cat-list
    margin: 0 auto
.cl
  width: 100px
  height: 100px
  margin: 0 auto
.load-more-btn
  display: block
  border: 1px solid #CACACA
  border-radius: 10px
  background-color: #fff
  padding: 24px 0
  width: 280px
  margin: 68px auto 30px
  cursor: pointer
</style>
