<template>
  <div class="cat-card">
    <div class="cat-card__background">
      <div class="cat-card__discount">
        <discount-icon v-if="cat.discount" :discount="cat.discount" />
      </div>
      <favorite-icon
        :inFavorite="cat.inFavorite"
        @action="changeFavoriteItems(cat.id)"
      />
      <img
        class="cat-card__img"
        :src="getImgUrl(cat.url)"
        :alt="cat.id + ' ' + cat.name"
      />
    </div>
    <div class="cat-card__cat-description">
      <span class="cat-card__cat-name">
        {{ cat.name }}
      </span>

      <div class="card-content">
        <div class="card-content__group">
          <span class="cat-card__cat-color">
            {{ cat.color }}
          </span>
        </div>

        <div class="card-content__group">
          <span class="cat-card__cat-age">{{ cat.age }} мес.</span>
          <span>Возраст</span>
        </div>

        <div class="card-content__group">
          <span class="cat-card__cat-age">{{ cat.paws }}</span>
          <span>Кол-во лап</span>
        </div>
      </div>

      <span class="cat-card__cat-price"
        >{{ cat.price.toLocaleString() }} руб.</span
      >
    </div>
    <cart-button
      :class="{ inCart: cat.inCart }"
      @action="changeCartItems(cat.id)"
      :isDisabled="cat.isSold"
      :btnText="getBtnText"
    />
  </div>
</template>

<script>
import FavoriteIcon from "@/components/AppCatCardFavoriteIcon.vue";
import CartButton from "@/components/AppCatCardCartButton.vue";
import DiscountIcon from "@/components/AppCatCardDiscountIcon.vue";

import { mapMutations } from 'vuex'

export default {
  props: ["cat"],
  methods: {
    ...mapMutations(["changeCartItems", "changeFavoriteItems"]),
    getImgUrl(pictureName) {
      return require("@/assets/img/" + pictureName);
    },
  },
  computed: {
    getBtnText() {
      if (this.cat.isSold) return "Продан";
      else {
        return this.cat.inCart ? "Убрать из корзины" : "Добавить в корзину";
      }
    },
  },
  components: {
    FavoriteIcon,
    CartButton,
    DiscountIcon,
  },
};
</script>

<style lang="sass">
.cat-card
  max-width: 380px
  background-color: #F3F3F3
  border-bottom-right-radius: 25px
  border-bottom-left-radius: 25px

  @media screen and (max-width: 1334px)
    max-width: 340px

  &__background
    position: relative

  &__img
    display: block
    width: 380px
    height: 264px

    @media screen and (max-width: 1334px)
      width: 340px
      height: 224px
  
  &__discount
    position: absolute
    margin-top: 20px
    margin-left: 20px

  &__cat-description
    margin: 29px

  &__cat-name, &__cat-price
    display: block
    font-weight: 700
    font-size: 24px
    line-height: 29px
    margin-bottom: 24px

  &__cat-age, &__cat-paws
    font-weight: 700
    font-size: 16px
    line-height: 20px

.card-content
  display: flex
  flex-flow: row wrap
  justify-content: space-around
  align-items: flex-start
  border-left: 4px solid #6EBBD3
  margin-bottom: 24px
  padding-left: 18px

  &__group
    flex-basis: 33%
    font-weight: 400
    font-size: 12px
    line-height: 15px
    &>span
      display: block
</style>
