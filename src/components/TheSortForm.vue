<template>
  <div class="sort-form wrapper">
    <div class="sort-form__caption"><span>Сортировать по:</span></div>
    <div class="sort-form__options">
      <div class="sort-form__sort-by-price" @click="sortByPrice">
        <span>Цене</span>
        <arrow :isAsc="priceDescendentSort" />
      </div>
      <div class="sort-form__sort-by-age" @click="sortByAge">
        <span>Возрасту</span>
        <arrow :isAsc="ageDescendentSort" />
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "@/components/TheSortFormArrow.vue";
export default {
  data() {
    return {
      priceDescendentSort: false,
      ageDescendentSort: false,
    };
  },
  methods: {
    sortByPrice() {
      this.$emit("sort-by-price", this.priceDescendentSort);
      this.priceDescendentSort = !this.priceDescendentSort;
    },
    sortByAge() {
      this.$emit("sort-by-age", this.ageDescendentSort);
      this.ageDescendentSort = !this.ageDescendentSort;
    },
  },
  components: {
    Arrow,
  },
};
</script>

<style lang="sass" scoped>
.sort-form
  display: flex
  flex-flow: row wrap
  font-weight: 400
  font-size: 18px
  line-height: 22px
  justify-content: flex-start
  gap: 14px 100px

  &__caption
    font-weight: 700

  &__options
    display: flex
    justify-content: flex-start
    gap: 0px 50px

  &__sort-by-price, &__sort-by-age
    display: flex
    flex-flow: row nowrap
    align-self: flex-start
    gap: 14px
    cursor: pointer
</style>
