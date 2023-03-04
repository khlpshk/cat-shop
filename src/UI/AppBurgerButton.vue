<template>
  <div
    class="burger-btn"
    :class="{ 'burger-btn_active': isActive }"
    @click="$emit('changeSt')"
  >
    <span></span>
  </div>
</template>

<script>
export default {
  // TODO: rename 'isActive'
  props: ["isActive"],
  emits: ["changeSt"],
};
</script>

<style lang="sass" scoped>
.burger-btn
  display: block
  width: 40px
  height: 35px
  position: relative
  z-index: 3
  cursor: pointer

  &::before, &::after
    content: ''

  &::before, &::after, & span
    position: absolute
    display: block
    width: 100%
    height: 3px
    background-color: #ffffff
    margin: 0 auto
    transition: all .3s ease 0s

  & span
    top: 40%

  &::before
    top: calc(40% - 10px)

  &::after
    top: calc(40% + 10px)

  &_active span
    display: none

  &_active::before
    top: 50%
    transform: rotate(-135deg)

  &_active::after
    top: 50%
    transform: rotate(135deg)
</style>
