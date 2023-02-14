<template>
  <div class="discount"> -{{ discount }}% </div>
</template>

<script>
export default {
  props: {
    discount: Number
  }
}
</script>

<style lang="sass">
.discount
  padding: 10px 19px 10px 18px !important
  font-size: 16px !important
  line-height: 18px
  width: 41px
  height: 20px
  background-color: #E62D2D
  color: #ffffff
  border-radius: 10px
  cursor: default
</style>
