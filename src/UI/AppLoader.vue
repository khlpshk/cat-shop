<template>
  <span class="loader"></span>
</template>

<script>
export default {};
</script>

<style lang="sass">
.loader
  width: inherit
  height: inherit
  border: 5px solid //#000
  border-color: inherit
  border-bottom-color: transparent
  border-radius: 50%
  display: inline-block
  box-sizing: border-box
  animation: rotation 1s linear infinite


@keyframes rotation
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
