<template>
  <div class="cat-cards">
    <cat-item v-for="cat_item in catList" :key="cat_item.id" :cat="cat_item" />
  </div>
</template>

<script>
import CatItem from "@/components/AppCatListItem.vue";

export default {
  props: ["catList"],
  components: {
    CatItem,
  },
  methods: {},
};
</script>

<style lang="sass">
.cat-cards
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-template-rows: 1fr
  gap: 30px
  @media screen and (max-width: 1700px)
    grid-template-columns: 1fr 1fr 1fr
    // gap: 25px
  @media screen and (max-width: 1203px)
    grid-template-columns: 1fr 1fr
    gap: 25px
  @media screen and (max-width: 788px)
    grid-template-columns: 1fr
    gap: 20px
  justify-items: center
  justify-content: space-around
</style>
