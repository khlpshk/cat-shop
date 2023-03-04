<template>
  <div class="arrow" :class="comp">
    <!-- TODO: переписать вёрстку с использованием псевдоклассов ::before, ::after -->
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    isAsc: Boolean
  },
  computed: {
    // TODO: изменить название computed-свойства
    comp () {
      return this.isAsc ? 'arrow_asc' : 'arrow_desc'
    }
  }
}
</script>

<style lang="sass">
.arrow
  width: 20px
  height: 10px
  margin-top: 8px !important
  // &::before, &::after
  //   content: ''
  //   display: block
  //   background-color: #000
  //   width: 10px
  //   height: 2px
  // &_asc::before
  //   transform: translate(0, 2px) rotate(-45deg)
  span
    display: block
    background-color: black
    width: 10px
    height: 2px
  &_asc
    span
      &:first-child
        transform: translate(0, 2px) rotate(-45deg)
      &:last-child
        transform: translate(6px, 0) rotate(45deg)
  &_desc
    span
      &:last-child
        transform: translate(6px, 0) rotate(-45deg)
      &:first-child
        transform: translate(0, 2px) rotate(45deg)
</style>
