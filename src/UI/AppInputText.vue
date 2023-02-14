<template>
  <input class="input" type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  props: ["placeholder"],
};
</script>

<style lang="sass">
.input
  width: 300px
  border: none
  border-radius: 10px
  padding: 22px 0 26px 33px
</style>
