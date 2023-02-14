<template>
  <sort-form @sort-by-price="sortByPrice" @sort-by-age="sortByAge"></sort-form>
  <cat-card-list :catsItems="cats" />
</template>

<script>
import CatCardList from "@/components/AppCatCardList.vue";
import SortForm from "@/components/SortForm.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { CatCardList, SortForm,  },
  computed: { ...mapGetters(["cats"]) },
  methods: {
    ...mapMutations(["sortByPrice", "sortByAge"]),
  },
};
</script>

<style></style>
