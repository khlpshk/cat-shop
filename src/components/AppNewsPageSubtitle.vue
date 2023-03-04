<template>
  <h2 class="subtitle">{{ content }}</h2>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style lang="sass" scoped>
.subtitle
  font-size: 24px
  margin-bottom: 10px
</style>
