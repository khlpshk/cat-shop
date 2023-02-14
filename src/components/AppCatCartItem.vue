<template>
  <div class="cat-cart-card">
    <div class="cat-cart-card__group img">
      <div class="cat-cart-card__cat-img">
        <img :src="getImgUrl(cat.url)" :alt="cat.id + ' - ' + cat.name" />
      </div>
    </div>
    <div class="cat-cart-card__group description">
      <div class="cat-cart-card__cat-description">
        <span class="cat-cart-card__cat-name">
          {{ cat.name }}
        </span>

        <div class="cart-card-content">
          <div class="cart-card-content__group">
            <span class="cat-cart-card__cat-color">
              {{ cat.color }}
            </span>
          </div>

          <div class="cart-card-content__group">
            <span class="cat-cart-card__cat-age">{{ cat.age }} мес.</span>
            <span>Возраст</span>
          </div>

          <div class="cart-card-content__group">
            <span class="cat-cart-card__cat-age">{{ cat.paws }}</span>
            <span>Кол-во лап</span>
          </div>
        </div>
      </div>
      <div class="cat-cart-card__actions">
        <span @click="changeCartItems(cat.id)">Убрать из корзины</span>
        <span @click="changeFavoriteItems(cat.id)">
          {{ cat.inFavorite ? 'Убрать из избранного' : 'В избранное'}}
        </span>
      </div>
    </div>
    <div class="cat-cart-card__group price">
      <span class="cat-cart-card__cat-price">
        {{ cat.price.toLocaleString() }} руб.
      </span>
      <div class="cat-cart-card__discount">
        <app-cat-card-discount-icon
          v-if="cat.discount"
          :discount="cat.discount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppCatCardDiscountIcon from "@/components/AppCatCardDiscountIcon.vue";
import { mapMutations } from "vuex";

export default {
  props: ["cat"],
  components: { AppCatCardDiscountIcon },
  methods: {
    ...mapMutations(["changeCartItems", "changeFavoriteItems"]),
    getImgUrl(pictureName) {
      return require("@/assets/img/" + pictureName);
    },
  },
};
</script>

<style lang="sass">
.cat-cart-card
  display: flex
  flex-flow: row nowrap
  font-size: 12px
  line-height: 13px
  margin-bottom: 15px
  border-bottom: 1px solid black
  @media screen and (max-width: 600px)
    flex-flow: row wrap

  &__group
    display: flex
    flex-direction: column
    margin: 10px 10px 15px

  &__group.description
    flex-basis: 50%
    @media screen and (max-width: 600px)
      order: 1
      flex-basis: 100%

  &__cat-img
    display: block
    position: relative
    &>img
      display: block
      width: 100px
      height: 75px

  &__cat-description
    margin-top: auto
    margin-bottom: auto
    display: flex
    flex-direction: column

  &__actions
    display: flex
    flex-flow: row wrap
    margin-bottom: 10px
    &>span
      margin-right: 12px
      display: block
      font-size: 12px
      font-weight: 500
      color: #005bff
      cursor: pointer

  &__cat-name, &__cat-price
    font-weight: 700
    font-size: 16px
    margin-bottom: 20px

  &__discount :only-child
    padding: 5px 10px 5px 7px !important
    font-size: 14px !important
    text-align: center

  &__cat-age, &__cat-paws
    font-weight: 700
    font-size: 14px
    line-height: 16px

.cart-card-content
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  border-left: 4px solid #6EBBD3
  margin-bottom: 24px

  &__group
    flex-basis: 33%
    display: flex
    flex-direction: column
    align-self: center

    font-weight: 400
    font-size: 12px
    line-height: 15px
    margin-left: 10px
    padding: 0 3px
    &>span
      display: block
</style>
