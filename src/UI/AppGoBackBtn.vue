<template>
  <span class="go-back" @click="$router.go(-1)">Вернуться назад</span>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.go-back
  display: block
  color: #0640ee
  margin-top: -10px
  margin-bottom: 20px
  cursor: pointer
</style>