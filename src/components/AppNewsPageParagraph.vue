<template>
  <p class="paragraph">{{ content }}</p>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style lang="sass" scoped>
.paragraph
  text-align: justify
  font-size: 18px
  // 16px
  margin-bottom: 20px
  @media screen and (max-width: 767px)
    font-size: 16px
    text-align: justify
    // or
    text-align: start

</style>
