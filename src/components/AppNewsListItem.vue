<template>
  <div class="card-news">
    <div class="card-news__img">
      <img
        :src="require(`@/assets/img/cat-news-img/${newsItem.img}.jpg`)"
        alt=""
        @click="goNewsPage"
      />
    </div>
    <div class="card-news__content">
      <div class="card-news__title" @click="goNewsPage">
        <h4>
          {{ newsItem.title }}
        </h4>
      </div>
      <div class="card-news__resume">
        {{ newsItem.resume }}
      </div>
      <div class="card-news__date">
        {{ newsItem.date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsItem: {
      type: Object,
      default: {},
      required: true,
    },
  },
  methods: {
    goNewsPage() {
      this.$router.push({
        name: "newsPage",
        params: {
          newsItemId: this.newsItem.id,
        },
      });
    },
  },
};
</script>

<style lang="sass" scoped>
// TODO
.card-news
  display: flex
  flex-flow: row nowrap
  border-radius: 15px
  color: #000
  width: 800px
  cursor: default
  @media screen and (max-width: 767px)
    width: 320px
    margin: 0 auto
    flex-direction: column

  &__img
    width: 320px
    height: 250px
    margin-right: 30px
    border-radius: 15px
    border-top-right-radius: 0px
    border-bottom-right-radius: 0px
    @media screen and (max-width: 767px)
        width: auto
        border-radius: 0px
        border-top-right-radius: 15px
        border-top-left-radius: 15px
        margin: 0
    cursor: pointer
    overflow: hidden

    & img
      display: block
      width: 320px
      height: 100%
      border-radius: inherit
      transition: all .3s ease-in-out
      &:hover
        transform: scale(1.05)


  &__content
    display: flex
    flex-flow: column wrap
    width: 480px
    padding: 24px 24px
    padding-left: 0
    @media screen and (max-width: 767px)
      flex-direction: column
      width: auto


  &__title
    // text-align: center
    display: block
    font-weight: 600
    font-size: 20px
    margin-bottom: 10px
    cursor: pointer
    box-sizing: content-box
    width: 320px
    @media screen and (max-width: 767px)
      font-size: 18px
      overflow-x: hidden
    & h4
      margin: 0


  &__resume
    margin-bottom: auto
    align-self: flex-start
    @media screen and (max-width: 767px)
      display: none

  &__date
    border-top: 1px solid #dee2e6
    padding-top: 10px
    margin-top: 10px
    font-weight: 600
    font-size: 12px
    color: #22a2fc
</style>
