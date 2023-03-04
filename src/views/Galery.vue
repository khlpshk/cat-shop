<template>
  <div class="galery">
    <h3 class="galery__title">Галерея</h3>
    <app-carousel :carouselItems="catImgs"/>
  </div>
</template>

<script>
import AppCarousel from "@/components/AppCarousel.vue";
import { mapGetters } from "vuex";

export default {
  components: { AppCarousel },
  data() {
    return {
      currentImg: 1,
    };
  },
  components: { AppCarousel },
  computed: {
    ...mapGetters("cats", ["cats", "catImgs"]),
  },
  methods: {
    getImgUrl(imgName) {
      return require(`@/assets/img/cat-cards-img/${imgName}.webp`);
    },
    prevSlide() {
      this.currentImg--;
    },
    nextSlide() {
      this.currentImg++;
    },
  },
};
</script>

<style lang="sass" scoped>
.galery
  margin: 0 auto

  &__title
    font-size: 25px
    margin: 0 auto
    text-align: center
    margin-bottom: 20px
</style>
