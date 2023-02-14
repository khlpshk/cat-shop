<template>
  <button class="btn" @click="$emit('action')">{{ btnText }}</button>
</template>

<script>
export default {
  emits: ["action"],
  props: ["btnText"],
};
</script>

<style lang="sass">
.btn
  border: none
  background-color: #6EBBD3
  border-radius: 10px
  font-weight: 700
  font-size: 14px
  line-height: 17px
  color: #fff
  padding: 22px 75px 26px
  cursor: pointer

</style>
