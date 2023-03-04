<template>
  <!-- v-if="isScrolling" -->
  <div
    class="up"
    :class="{ up_scrolled: scrollY > 0 }"
    @click="scrollToUp"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
    }
  },
  computed: {
    // isScrolling() {
    //   console.log(window.scrollY);
    //   return window.scrollY > 0;
    // },
  },
  methods: {
    isScrolling() {
      this.scrollY = window.scrollY;
      console.log(window.scrollY);
      // return window.scrollY > 10;
    },
    scrollToUp() {
      scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.up
  position: fixed
  bottom: -100px //34px
  right:  -100px
  width: 29px
  height: 29px
  background-color: #6EBBD3
  padding: 10px
  opacity: 0
  transition: all 0.3s
  cursor: pointer
  &_scrolled
    display: block
    bottom: 34px
    right: 60px
    opacity: 1
  @media screen and (max-width: 767px)
    bottom: 24px
    right: 20px
  &::before, &::after
    content: ''
    display: block
    background-color: #fff
    width: 20px
    height: 3px


  &::before
    transform: translate(-2px, 11px) rotate(135deg)
  &::after
    transform: translate(11px, 8px) rotate(45deg)
</style>
