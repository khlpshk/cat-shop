<template>
  <div class="cat-cards wrapper">
    <cat-card v-for="cat in catsItems" :key="cat.id" :cat="cat" />
  </div>
</template>

<script>
import CatCard from "@/components/AppCatCard.vue";
import { mapGetters } from "vuex";

export default {
  props: ["catsItems"],
  // computed: { ...mapGetters(["cats"]) },
  components: {
    CatCard,
  },
  methods: {},
};
</script>

<style lang="sass">
.cat-cards
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  @media screen and (max-width: 1203px)
    grid-template-columns: 1fr 1fr
    gap: 25px
  @media screen and (max-width: 788px)
    grid-template-columns: 1fr
    gap: 20px
  gap: 30px
  justify-items: center
  justify-content: space-around

</style>
