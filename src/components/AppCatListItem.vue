<template>
  <div class="cat-item">
    <div class="cat-item__background">
      <div class="cat-item__discount">-{{ cat.discount }}%</div>
      <favorite-icon :inFavorite="cat.inFavorite" @action="favorite(cat)" />
      <img
        class="cat-item__img"
        :alt="cat.id + ' ' + cat.name"
        :src="require(`@/assets/img/cat-cards-img/${cat.img_url}.webp`)"
      />
    </div>
    <div class="cat-item__cat-description">
      <a :href="cat.url" class="cat-item__cat-name">
        {{ cat.name }}
      </a>
      <!-- <span class="cat-item__cat-name">
        {{ cat.name }}
      </span> -->

      <div class="card-content">
        <div class="card-content__group">
          <span class="cat-item__cat-color">
            {{ cat.color }}
          </span>
        </div>

        <div class="card-content__group">
          <span class="cat-item__cat-age">{{ cat.age }} мес.</span>
          <span>Возраст</span>
        </div>

        <div class="card-content__group">
          <span class="cat-item__cat-age">{{ cat.paws }}</span>
          <span>Кол-во лап</span>
        </div>
      </div>

      <span class="cat-item__cat-price"
        >{{ cat.price.toLocaleString() }} руб.</span
      >
    </div>
    <button
      class="cat-item__cart-btn"
      :class="{ 'cat-item__cart-btn_inCart': cat.inCart }"
      @click="cart(cat)"
      :disabled="cat.isSold"
    >
      {{ getBtnText }}
    </button>
  </div>
</template>

<script>
import FavoriteIcon from "@/components/AppCatListItemFavoriteIcon.vue";

import { mapActions } from "vuex";

export default {
  props: ["cat"],
  methods: {
    ...mapActions("cats", ["changeCatCartValue", "changeCatFavoriteValue"]),
    ...mapActions("cart", ["pushInCart", "deleteFromCart"]),
    ...mapActions("favorite", ["addInFavorite", "deleteFromFavorite"]),

    // TODO: изменить название метода
    favorite(cat) {
      if (cat.inFavorite) this.deleteFromFavorite(cat);
      else this.addInFavorite(cat);

      this.changeCatFavoriteValue(cat.id);
    },
    // TODO: изменить название метода
    cart(cat) {
      if (cat.inCart) this.deleteFromCart(cat);
      else this.pushInCart(cat);

      this.changeCatCartValue(cat.id);
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
  components: { FavoriteIcon },
};
</script>

<style lang="sass" scoped>
.cat-item
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
    width: 100%
    height: 264px

  &__discount
    position: absolute
    margin-top: 20px
    margin-left: 20px
    padding: 10px 19px 10px 18px
    // font-size: 16px
    line-height: 18px
    width: 41px
    height: 20px
    background-color: #E62D2D
    color: #ffffff
    border-radius: 10px
    cursor: default

  &__cat-description
    display: flex
    flex-direction: column
    height: 250px
    margin: 29px
    @media screen and (max-width: 767px)
      height: auto

  &__cat-name, &__cat-price
    color: #000
    display: block
    font-weight: 700
    font-size: 24px
    line-height: 29px
    margin-bottom: 24px

  &__cat-name
    height: 200px
    overflow: hidden
    @media screen and (max-width: 767px)
      height: auto


  &__cat-price
    // align-self: flex-end
    margin-top: 20px

  &__cat-age, &__cat-paws
    font-weight: 700
    font-size: 16px
    line-height: 20px

  &__cart-btn
    width: 100%
    background-color: #6EBBD3
    border-bottom-right-radius: 25px
    border-bottom-left-radius: 25px
    padding: 22px 0
    font-family: 'Montserrat'
    font-style: normal
    font-weight: 700
    font-size: 16px
    line-height: 20px
    color: #FFFFFF
    cursor: pointer
    &:disabled
      cursor: default
      background-color: #1F2021
    &_inCart
      background-color: #2B758C

.card-content
  // margin-top: auto
  margin-bottom: auto
  display: flex
  flex-flow: row wrap
  justify-content: space-around
  align-items: flex-start
  border-left: 4px solid #6EBBD3
  // margin-bottom: 24px
  padding-left: 18px

  &__group
    flex-basis: 33%
    font-weight: 400
    font-size: 12px
    line-height: 15px
    &>span
      display: block
</style>
