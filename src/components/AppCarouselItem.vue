<template>
  <div
    class="carousel-item"
    :class="{ 'carousel-item_current-slide': isCurrentSlide }"
  >
    <!-- @click="$emit('change-slide', carouselItem.id)" -->
    <img
      :src="require(`@/assets/img/cat-cards-img/${carouselItem.url}.webp`)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    carouselItem: {
      type: Object,
      default: () => {},
    },
    isCurrentSlide: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="sass" scoped>
.carousel-item
  width: 200px
  height: 150px
  cursor: pointer

  margin-right: 5px

  &:last-of-type
    margin-right: 0

  &:hover
    border: 3px solid black
    width: 194px
    height: 144px
    @media screen and (max-width: 767px)
      width: 144px
      height: 94px

  @media screen and (max-width: 767px)
    width: 150px
    height: 100px

  & img
    display: block
    width: inherit
    height: inherit

  &_current-slide
    border: 3px solid black
    width: 194px
    height: 144px
    @media screen and (max-width: 767px)
      width: 144px
      height: 94px
</style>
