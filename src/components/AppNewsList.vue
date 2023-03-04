<template>
  <div class="cl2" v-if="isNewsLoading">
    <app-loader />
  </div>
  <div class="news-cards" v-else>
    <app-news-list-item
      class="news-cards__item"
      v-for="newsItem in newsOnPage"
      :key="newsItem.id"
      :newsItem="newsItem"
    />
    <app-page-navigation
      :currentPage="currentPage + 1"
      :recordsCount="news.length"
      :recordsOnPage="limit"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import AppNewsListItem from "@/components/AppNewsListItem.vue";
import AppPageNavigation from "@/UI/AppPageNavigation.vue";
import AppLoader from "@/UI/AppLoader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      currentPage: 0,
      newsCount: 0,
      limit: 5,
    };
  },
  mounted() {
    this.getNews();
  },
  components: { AppNewsListItem, AppLoader, AppPageNavigation },
  computed: {
    ...mapGetters("news", ["news", "isNewsLoading"]),
    newsOnPage() {
      let start = this.currentPage * this.limit;
      let end = this.limit * (this.currentPage + 1);
      return this.news.slice(start, end);
    },
  },
  methods: {
    ...mapActions("news", ["getNews"]),
    changePage(page) {
      // let heigth = document.querySelector(".header").clientHeight;
      this.currentPage = page - 1;
      // console.log(typeof heigth)
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 2);
    },
  },
};
</script>

<style lang="sass" scoped>
.cl2
  width: 100px
  height: 100px
  margin: 50px auto
.go-back
  display: block
  color: #0640ee
  margin-top: -10px
  margin-bottom: 20px
  cursor: pointer

.news-cards
  display: flex
  flex-direction: column
  justify-content: center

  &__item
    margin: 0 auto 20px
</style>
