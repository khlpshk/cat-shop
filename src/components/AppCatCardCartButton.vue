<template>
  <button :class="btnClass" @click="$emit('action')" :disabled="isDisabled">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  emits: ['action'],
  props: {
    btnText: String,
    btnClass: String,
    isDisabled: Boolean
  }
}
</script>

<style lang="sass" scoped>
button
  border: none
  margin: 0
  width: 100%
  background-color: #6EBBD3
  border-bottom-right-radius: 25px
  border-bottom-left-radius: 25px
  padding: 22px 0
  font-family: 'Montserrat'
  font-style: normal
  font-weight: 700
  font-size: 16px
  line-height: 20px
  text-align: center
  color: #FFFFFF
  cursor: pointer
  &:disabled
    cursor: default
    background-color: #1F2021
  &.inCart
    background-color: #2B758C
</style>
