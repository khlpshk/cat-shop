<template>
  <div class="carousel" v-if="carouselItems.length > 0">
    <div class="carousel__current-slide">
      <div class="carousel__slide-number">
        {{ `${current + 1}/${carouselItems.length}` }}
      </div>
      <div
        class="carousel__current-img"
      >
        <img
          :src="
            require(`@/assets/img/cat-cards-img/${carouselItems[current].url}.webp`)
          "
          alt=""
        />
      </div>
      <div class="carousel__text">
        {{ carouselItems[current].name }}
      </div>
      <span class="carousel__btn-prev" @click="prevSlide">&#10094;</span>
      <span class="carousel__btn-next" @click="nextSlide">&#10095;</span>
    </div>
    <div class="carousel__items">
      <carouse-item
        v-for="(carouselItem, index) in carouselItems"
        :key="carouselItem.id"
        :carouselItem="carouselItem"
        :isCurrentSlide="index === current"
        @click="current = index"
      />
    </div>
  </div>
</template>

<script>
import CarouseItem from "@/components/AppCarouselItem.vue";
let x1 = null;
let y1 = null;

export default {
  props: {
    carouselItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    touchStart(event) {
      const firstTouch = event.touches[0];
      x1 = firstTouch.clientX;
    },
    touchMove(event) {
      if (!x1) {
        return false;
      }
      const firstTouch = event.touches[0];
      let x2 = firstTouch.clientX;
      let xDiff = x2 - x1;

      if (Math.abs(xDiff) > 200) {
        if (xDiff > 0) this.nextSlide();
        else this.prevSlide();
      }
      x1 = null;
    },
    nextSlide() {
      if (this.current === this.carouselItems.length - 1) this.current = 0;
      else this.current++;
    },
    prevSlide() {
      if (this.current === 0) this.current = this.carouselItems.length - 1;
      else this.current--;
    },
  },
  components: { CarouseItem },
};
</script>

<style lang="sass" scoped>
$borderRadius: 10px

.carousel
  max-width: 900px
  margin: auto

  &__current-slide
    position: relative
    margin-bottom: 10px

  &__slide-number
    position: absolute
    top: 0
    color: #f2f2f2
    font-size: 12px
    padding: 8px 12px
    background-color: #0000007a
    border-bottom-right-radius: $borderRadius
    border-top-left-radius: $borderRadius

  &__current-img
    width: 100%
    height: 500px
    overflow: hidden
    border-top-left-radius: $borderRadius
    border-top-right-radius: $borderRadius
    @media screen and (max-width: 767px)
      height: 300px
    & img
      display: block
      width: inherit
      height: inherit

  &__text
    color: #2207a2
    font-size: 30px
    font-weight: 700
    padding: 8px 0
    position: absolute
    bottom: 8px
    width: 100%
    text-align: center

  &__btn-prev, &__btn-next
    cursor: pointer
    position: absolute
    top: 50%
    width: auto
    margin-top: -22px
    padding: 16px
    color: #000
    font-weight: bold
    font-size: 18px
    transition: 0.3s ease
    border-radius: 0 3px 3px 0
    user-select: none
    // @media screen and (max-width: 767px)
    //   display: none
    &:hover
      color: #fff
      background-color: rgba(0,0,0,0.8)
  &__btn-next
    right: 0
    border-radius: 3px 0 0 3px


  &__items
    display: flex
    flex-flow: row nowrap
    overflow: scroll
    padding: 10px 0 15px
</style>
