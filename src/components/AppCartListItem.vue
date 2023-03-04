<template>
  <div class="cat-cart-card">
    <div class="cat-cart-card__group img">
      <div class="cat-cart-card__cat-img">
        <img
          :src="require(`@/assets/img/cat-cards-img/${cartItem.img_url}.webp`)"
          :alt="cartItem.id + ' - ' + cartItem.name"
        />
      </div>
    </div>
    <div class="cat-cart-card__group description">
      <div class="cat-cart-card__cat-description">
        <span class="cat-cart-card__cat-name">
          {{ cartItem.name }}
        </span>

        <div class="cart-card-content">
          <div class="cart-card-content__group">
            <span class="cat-cart-card__cat-color">
              {{ cartItem.color }}
            </span>
          </div>

          <div class="cart-card-content__group">
            <span class="cat-cart-card__cat-age">{{ cartItem.age }} мес.</span>
            <span>Возраст</span>
          </div>

          <div class="cart-card-content__group">
            <span class="cat-cart-card__cat-age">{{ cartItem.paws }}</span>
            <span>Кол-во лап</span>
          </div>
        </div>
      </div>
      <div class="cat-cart-card__actions">
        <span @click="deleteCartItem(cartItem)">Убрать из корзины</span>
        <span @click="changeFavoriteItems(cartItem.id)">
          {{ cartItem.inFavorite ? "Убрать из избранного" : "В избранное" }}
        </span>
      </div>
    </div>
    <div class="cat-cart-card__group price">
      <span class="cat-cart-card__cat-price">
        {{ cartItem.price.toLocaleString() }} руб.
      </span>
    </div>
  </div>
</template>

<script>
// import AppCatCardDiscountIcon from "@/components/AppCatCardDiscountIcon.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    cartItem: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  components: {
    ...mapGetters("favorite", ["favoriteItems"]),
  },
  methods: {
    ...mapActions("cart", ["deleteFromCart"]),
    ...mapActions("favorite", ["addInFavorite", "deleteFromFavorite"]),
    ...mapActions("cats", ["changeCatCartValue", "changeCatFavoriteValue"]),
    changeFavoriteItems(id) {
      if (this.cartItem.inFavorite) {
        this.deleteFromFavorite(this.cartItem);
      } else {
        this.addInFavorite(this.cartItem);
      }
      this.changeCatFavoriteValue(id);
    },
    deleteCartItem(cartItem) {
      this.deleteFromCart(cartItem);
      this.changeCatCartValue(cartItem.id);
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
    & img
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
