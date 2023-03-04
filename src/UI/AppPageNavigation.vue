<template>
  <!-- TODO: сделать компонент адаптивным -->
  <div class="page-nav">
    <li
      class="page-nav__arrow"
      @click="preventPage"
      v-if="currentPage >= 2"
    >
      &#10094;
    </li>

    <li
      class="page-nav__page-btn"
      @click="changePage(1)"
      :class="{ 'page-nav__page-btn_active': currentPage === 1 }"
    >
      1
    </li>

    <li class="page-nav__page-btn" disabled v-if="currentPage > 4">...</li>

    <template v-for="page in pageCounts" :key="page">
      <li
        class="page-nav__page-btn"
        @click="changePage(page)"
        :class="{ 'page-nav__page-btn_active': page === currentPage }"
        v-if="conditions(page)"
      >
        {{ page }}
      </li>
    </template>

    <li class="page-nav__page-btn" disabled v-if="currentPage < pageCounts - 3">
      ...
    </li>

    <li
      class="page-nav__page-btn"
      @click="changePage(pageCounts)"
      :class="{ 'page-nav__page-btn_active': currentPage === pageCounts }"
    >
      {{ pageCounts }}
    </li>

    <li
      class="page-nav__arrow"
      @click="nextPage"
      v-if="currentPage <= pageCounts - 1"
    >
      &#10095;
    </li>
  </div>
</template>

<script>
export default {
  emits: ["change-page"],
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
    recordsCount: {
      type: Number,
      required: true,
    },
    recordsOnPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // currentPage: 1,
    };
  },
  computed: {
    pageCounts() {
      return Math.ceil(this.recordsCount / this.recordsOnPage);
    },
  },
  methods: {
    conditions(page) {
      if (page === 1) return false;
      else if (page === this.pageCounts) return false;
      else if (page + 2 < this.currentPage) return false;
      else if (page > this.currentPage + 2) return false;
      else return true;
    },
    changePage(page) {
      this.$emit("change-page", page);
    },
    nextPage() {
      this.$emit("change-page", this.currentPage + 1);
    },
    preventPage() {
      this.$emit("change-page", this.currentPage - 1);
    },
  },
};
</script>

<style lang="sass" scoped>
.page-nav
  display: flex
  flex-direction: row
  justify-content: center
  font-size: 18px
  @media screen and (max-width: 767px)
    font-size: 13px
  &__page-btn
    display: flex
    justify-content: center
    align-items: center
    color: #000
    border-radius: 8px
    &_active
      background-color: #1f1f1f
      color: #fff
    &[disabled]
      cursor: default
  &__page-btn //, &__arrow
    width: 36px
    height: 36px
    min-width: 36px
    min-height: 36px
    cursor: pointer
  &__arrow
    width: 36px
    cursor: pointer
    height: 30px
    padding-top: 6px
    text-align: center
</style>
