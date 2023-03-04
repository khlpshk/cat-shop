<template>
  <div class="cat-cart-page">
    <div class="cart-page__empty-cart" v-if="cartItemsCount === 0">
      <div class="cart-page__cart-icon">
        <svg
          fill="black"
          width="100px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 119.88 119.88"
          style="enable-background: new 0 0 119.88 119.88"
          xml:space="preserve"
        >
          <g>
            <path
              d="M92.652,119.88H28.47c-6.042,0-10.956-4.914-10.956-10.952L8.423,66.246c-3.435-1.703-5.691-5.177-5.691-9.056
		c0-5.669,4.611-10.276,10.276-10.276h93.864c5.665,0,10.276,4.607,10.276,10.276c0,3.317-1.601,6.354-4.278,8.266l-9.337,44.166
		C103.608,114.966,98.694,119.88,92.652,119.88z M13.008,53.653c-1.948,0-3.536,1.588-3.536,3.536c0,1.536,1.11,2.896,2.703,3.3
		c1.242,0.316,2.194,1.316,2.457,2.571l9.547,45.175c0.075,3.018,1.966,4.905,4.291,4.905h64.182c2.325,0,4.217-1.887,4.217-4.212
		l9.71-46.289c0.211-1.018,0.882-1.878,1.808-2.334c1.246-0.605,2.023-1.808,2.023-3.115c0-1.948-1.588-3.536-3.537-3.536H13.008z"
            />
            <path
              d="M37.123,100.121c0,1.304-1.067,2.371-2.371,2.371h-0.653c-1.304,0-2.371-1.067-2.371-2.371V72.368
		c0-1.304,1.067-2.371,2.371-2.371h0.653c1.304,0,2.371,1.067,2.371,2.371V100.121z"
            />
            <path
              d="M54.483,100.121c0,1.304-1.067,2.371-2.371,2.371h-0.653c-1.304,0-2.372-1.067-2.372-2.371V72.368
		c0-1.304,1.067-2.371,2.372-2.371h0.653c1.304,0,2.371,1.067,2.371,2.371V100.121z"
            />
            <path
              d="M71.844,100.121c0,1.304-1.067,2.371-2.371,2.371h-0.654c-1.304,0-2.371-1.067-2.371-2.371V72.368
		c0-1.304,1.067-2.371,2.371-2.371h0.654c1.304,0,2.371,1.067,2.371,2.371V100.121z"
            />
            <path
              d="M89.205,100.121c0,1.304-1.067,2.371-2.371,2.371H86.18c-1.304,0-2.372-1.067-2.372-2.371V72.368
		c0-1.304,1.068-2.371,2.372-2.371h0.653c1.304,0,2.371,1.067,2.371,2.371V100.121z"
            />
            <path
              d="M28.027,34.868c2.25-15.669,15.69-27.723,31.98-27.723c16.291,0,29.732,12.055,31.982,27.723c0.328,5.35,7.22,4.494,7.22,0
		C96.915,15.24,80.253,0,60.008,0c-20.244,0-36.907,15.24-39.2,34.868C20.807,40.433,28.115,40.647,28.027,34.868z"
            />
          </g>
        </svg>
      </div>
      <div class="cart-page__title">В корзине нет котов</div>
      <div class="cart-page__button">
        <app-button btnText="Вернуться назад" @action="$router.go(-1)" />
      </div>
    </div>
    <div class="cat-cart-page__cart" v-else>
      <go-back-btn />
      <div class="cart-page__content">
        <div class="cart-page__cart-list">
          <app-cart-list :cartItems="cartItems" />
        </div>
        <div class="cart-page__cart-sidebar">
          <div class="cart-page__title">
            В корзине {{ cartItemsCount }} {{ getCartItemsCountEndCaption }}
          </div>
          <div class="cart-page__cart-sum">
            на {{ cartItemsTotalPrice.toLocaleString() }} руб.
          </div>
          <span class="cart-page__cart-clear" @click="clean"
            >Очистить корзину</span
          >
          <div class="cart-page__button">
            <app-button
              btnText="Перейти к оформлению"
              @action="$router.push($router.options.history.state.back)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCartList from "@/components/AppCartList.vue";
// import AppCatCartItem from "@/components/AppCartListItem.vue";
import GoBackBtn from "@/UI/AppGoBackBtn.vue";
import AppButton from "@/UI/AppButton.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", [
      "cartItems",
      "cartItemsCount",
      "cartItemsTotalPrice",
    ]),
    getCartItemsCountEndCaption() {
      if (this.cartItemsCount % 10 === 1 && this.cartItemsCount !== 11)
        return "кот";
      else if (this.cartItemsCount % 10 > 1 && this.cartItemsCount <= 4)
        return "кота";
      else if (this.cartItemsCount >= 4 || this.cartItemsCount === 11)
        return "котов";
    },
  },
  methods: {
    ...mapActions("cart", ["cleanCart"]),
    ...mapActions("cats", ["changeCatCartValues"]),
    // TODO: переименовать метод
    clean() {
      this.cleanCart();
      this.changeCatCartValues();
    },
    getImgUrl(pictureName) {
      return require("@/assets/img/" + pictureName);
    },
  },
  components: { AppButton, GoBackBtn, AppCartList },
};
</script>

<style lang="sass" scoped>

.go-back
  display: block
  color: #0640ee
  margin-top: -10px
  margin-bottom: 20px
  cursor: pointer

.cart-icon
  width: 100px
  height: 100px
  margin: 10px auto

.cart-button
  margin-bottom: 20px

.cart-page
  display: flex
  flex-direction: column

  &__cart-list
    margin-left: auto
    margin-right: 10px
    @media screen and (max-width: 1027px)
      margin: 0 auto

  &__cart-sidebar
    text-align: center
    padding: 20px 10px
    margin-right: auto
    margin-left: 10px
    align-self: flex-start
    @media screen and (max-width: 1027px)
      margin: 0 auto
      font-size: 14px

  &__cart-clear
    display: block
    margin-bottom: 20px
    color: #0640ee
    cursor: pointer

  &__title, &__cart-sum
    font-size: 20px
    font-weight: 700
    line-height: 21px
    margin-bottom: 20px
    @media screen and (max-width: 1027px)
      font-size: 16px
      line-height: 17px
      margin-bottom: 10px

  &__empty-cart
    display: flex
    flex-direction: column
    align-content: center
    margin: 0 auto
    text-align: center

  &__content
    display: flex
    flex-flow: row wrap
    margin: 0 auto
</style>
