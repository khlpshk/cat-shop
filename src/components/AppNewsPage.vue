<template>
  <div class="news-page" v-if="news && news.length > 0">
    <h2 class="news-page__title">
      {{ newsItem.title }}
    </h2>
    <div class="news-page__resume">
      {{ newsItem.resume }}
    </div>
    <div class="news-page__img">
      <img
        :src="require(`@/assets/img/cat-news-img/${newsItem.img}.webp`)"
        alt=""
      />
    </div>
    <a :href="newsItem.url" >Ссылка на источник</a>
    <div class="news-page__content">
      <component
        v-for="(item, index) in newsItem.body"
        :key="index"
        :is="getComponentsName(item.type)"
        :content="item.content"
      >
      </component>
    </div>
  </div>
</template>

<script>
import AppSubtitle from "@/components/AppNewsPageSubtitle.vue";
import AppParagraph from "@/components/AppNewsPageParagraph.vue";
import AppImage from "@/components/AppNewsPageImage.vue";

import { mapGetters } from "vuex";

export default {
  props: {
    newsItemId: {
      type: String,
    },
  },
  mounted() {
    console.log(this.news);
  },
  computed: {
    ...mapGetters("news", ["news"]),
    newsItem() {
      let newsItem = this.news.filter(newsItem => newsItem.id === Number(this.newsItemId))[0];
      console.log(newsItem);
      console.log(this.news && this.news.length > 0)
      return newsItem; //this.news.filter(newsItem => newsItem.id === Number(this.newsItemId))[0];
    }
  },
  methods: {
    getComponentsName(type) {
      if (type === "subtitle") return "app-subtitle";
      else if (type === "paragraph") return "app-paragraph";
      else if (type === "image") return "app-image";
    },
  },
  components: {
    AppSubtitle,
    AppParagraph,
    AppImage,
  },
};
</script>

<style lang="sass" scoped>
.go-back
  display: block
  color: #0640ee
  margin-top: -10px
  margin-bottom: 20px
  cursor: pointer

.news-page
  width: 70%
  margin: 0 auto
  @media screen and (max-width: 767px)
    width: auto

  &__title
    font-size: 30px
    margin-bottom: 20px
    @media screen and (max-width: 767px)
      font-size: 22px

  &__resume
    font-size: 20px
    margin-bottom: 20px
    @media screen and (max-width: 767px)
      font-size: 18px

  &__img
    width: 500px
    overflow: hidden
    cursor: pointer
    margin: 0 auto 20px
    @media screen and (max-width: 767px)
      width: 100%
    & img
      display: block
      width: 100%
      transition: all .3s ease-in-out
      &:hover
        transform: scale(1.05)
</style>
