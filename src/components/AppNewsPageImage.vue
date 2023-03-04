<template>
  <div class="image">
    <img :src="require(`@/assets/img/cat-news-img/${content}.webp`)" alt="" />
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style lang="sass" scoped>
.image
  width: 400px
  @media screen and (max-width: 767px)
    width: 100%
  margin: 0 auto 10px
  overflow: hidden
  cursor: pointer
  & img
    display: block
    width: 100%
    transition: all .3s ease-in-out
    &:hover
      transform: scale(1.05)
</style>
