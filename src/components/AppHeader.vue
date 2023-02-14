<template>
  <header class="header">
    <div class="header__default">
      <div class="header__content container">
        <div class="header__section">
          <div class="logo-container">
            <div class="header__logo"></div>
          </div>
          <div class="header__navigation">
            <the-navbar />
          </div>
          <!-- TODO: Изменить название класса 'header__contacts' -->
          <div class="header__contacts">
            <the-contacts />
          </div>
        </div>
        <div class="header__section">
          <div class="header__cats-count">
            <h1>Найдено {{ catsCount }} котов</h1>
          </div>
          <div class="header__icon-group">
            <router-link to="/cart">
              <cart-icon />
            </router-link>
            <router-link to="/favorite">
              <favorite-icon />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="header__burger">
      <div class="header__burger-header">
        <div class="header__burger-logo">
          <div class="header__logo"></div>
        </div>
        <div class="header__cats-count" v-if="$route.path === '/'">
          <h1>Найдено {{ catsCount }} {{ getCatsCountEndCaption }}</h1>
        </div>
        <div
          class="header__burger-btn"
          :class="{ 'header__burger-btn_active': showBurgerMenu }"
          @click="showBurgerMenu = !showBurgerMenu"
        >
          <span></span>
        </div>
      </div>
      <div
        class="header__burger-menu"
        :class="{ 'header__burger-menu_active': showBurgerMenu }"
        @click="showBurgerMenu = false"
      >
        <the-navbar />
        <a href="tel:+544 3490 00000" class="contacts__phone-number"
          >+544 3490 00000</a
        >
        <div class="header__icon-group">
          <router-link to="/cart">
            <cart-icon />
          </router-link>
          <router-link to="/favorite">
            <favorite-icon />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CartIcon from "../UI/CartIcon.vue";
import FavoriteIcon from "../UI/FavoriteIcon.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheContacts from "@/components/TheContacts.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showBurgerMenu: false,
    };
  },
  components: { CartIcon, FavoriteIcon, TheNavbar, TheContacts },
  computed: {
    ...mapGetters(["catsCount", "getCatsCountEndCaption", "burgerOpened"]),
    getCatsCountEndCaption() {
      if (this.catsCount % 10 === 1 && this.catsCount !== 11) return "кот";
      else if (this.catsCount % 10 > 1 && this.catsCount <= 4) return "кота";
      else if (this.catsCount >= 4 || this.catsCount === 11) return "котов";
    },
    // method() {
    //   this.showBurgerMenu = !this.showBurgerMenu;
    //   document.body.style.overflow = this.showBurgerMenu ? "hidden" : "scroll";
    // },
  },
  methods: {},
};
</script>

<style lang="sass">

.cat-founds
  font-weight: 700
  font-size: 38px
  line-height: 46px

.header
  background-image: url("@/assets/img/header-background.png")
  background-position: center
  background-size: cover
  font-size: 18px
  line-height: 22px

  &__cats-count
    font-weight: 700
    font-size: 38px
    line-height: 46px
    color: #fff
    @media screen and (max-width: 767px)
      font-size: 14px

  &__default
    height: 100%
    background-color: rgba(31, 32, 33, 0.79)
    @media screen and (max-width: 767px)
      display: none

  &__burger
    display: none
    @media screen and (max-width: 767px)
      display: block
    position: fixed
    width: 100%
    top: 0px
    left: 0
    z-index: 99

  &__burger-header
    position: relative
    background-color: #1f2021
    height: 60px
    display: flex
    flex-flow: row wrap
    justify-content: space-between
    align-items: center
    padding: 0 20px
    z-index: 3

  &__burger-logo
    padding-bottom: 5px
    width: 40px
    height: 40px
    z-index: 3

  &__burger-btn
    width: 42px
    height: 42px
    position: relative
    z-index: 3

    &::before
      margin-top: 10px
      content: ''
      display: block
      width: 40px
      height: 2px
      background-color: #fff
      margin-bottom: 7px
      transition: all .3s ease 0s
    &_active::before
      // margin-top: 5px
      position: absolute
      top: 11px
      transform: rotate(45deg)
    & span
      display: block
      width: 40px
      height: 2px
      background-color: #fff
      top: 9px
      margin-bottom: 7px
      transition: all .1s ease 0s
    &_active span
      // opacity: 0
      transform: scale(0)
    &::after
      content: ''
      display: block
      width: 40px
      height: 2px
      background-color: #fff
      margin-bottom: 7px
      transition: all .3s ease 0s
    &_active::after
      position: absolute
      bottom: 12px
      transform: rotate(-45deg)

  &__burger-menu
    overflow: scroll
    position: fixed
    width: 100%
    height: 100%
    top: -200%
    background-color: #2b2d2e
    padding-left: 20px
    padding-right: 20px
    padding-top: 50px
    padding-bottom: 10px
    transition: all .3s ease 0s
    @media screen and (max-width: 767px)
      overflow-y: hidden
    &_active
      display: block
      top: 30px

  &__logo
    background-image: url("@/assets/img/logo.png")
    background-position: center
    background-size: cover
    width: 78px
    height: 51px
    @media screen and (max-width: 767px)
      width: 40px
      height: 40px
    @media screen and ( max-width: 1074px)
      order: -1

  &__navigation
    @media screen and ( max-width: 1074px)
      order: 1

  &__contacts
    @media screen and ( max-width: 1074px)
      order: 0

  &__content
    padding-top: 40px
    padding-bottom: 66px
    display: flex
    flex-direction: column
    gap: 50px
    @media screen and ( max-width:  900px)
      gap: 25px
      padding-top: 20px
      padding-bottom: 46px

  &__section
    display: flex
    flex-flow: row wrap
    align-items: center
    column-gap: 50px
    row-gap: 50px
    color: #fff
    & div:last-child
      margin-right: 0
      margin-left: auto
    & div:first-child
      margin-left: 0
      margin-right: auto

  &__icon-group
    display: flex
    gap: 50px
    @media screen and (max-width: 767px)
      justify-content: flex-end
      padding-right: 35px
</style>
