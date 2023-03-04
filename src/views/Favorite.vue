<template>
  <div class="cat-favorite-page wrapper">
    <div
      class="cat-favorite-page__empty-favorite"
      v-if="favoriteItemsCount === 0"
    >
      <div class="favorite-icon">
        <svg width="100" viewBox="0 0 46 42" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.7812 0.695312C31.2851 0.695312 28.9966 1.4863 26.9794 3.04634C25.0456 4.54197 23.758 6.44693 23 7.83214C22.242 6.44684 20.9544 4.54197 19.0206 3.04634C17.0034 1.4863 14.7149 0.695312 12.2188 0.695312C5.25298 0.695312 0 6.39293 0 13.9485C0 22.1112 6.55347 27.696 16.4746 36.1505C18.1593 37.5863 20.0689 39.2138 22.0538 40.9494C22.3154 41.1785 22.6514 41.3047 23 41.3047C23.3486 41.3047 23.6846 41.1785 23.9462 40.9495C25.9312 39.2136 27.8408 37.5862 29.5265 36.1496C39.4465 27.696 46 22.1112 46 13.9485C46 6.39293 40.747 0.695312 33.7812 0.695312Z"
            fill="#f8104b"
            fill-opacity="0.9"
          />
        </svg>
      </div>
      <div class="cat-favorite-page__title">В избранном нет котов</div>
      <div class="favorite-button">
        <app-button
          class="cat-cart-items__btn"
          btnText="Вернуться назад"
          @action="$router.go(-1)"
        />
      </div>
    </div>
    <div class="cat-favorite-page__favorite-items" v-else>
      <span
        class="go-back"
        @click="$router.go(-1)"
        >Вернуться назад</span
      >
      <div class="cat-favorite-page__title">
        В избранном {{ favoriteItemsCount }} {{ getFavoriteCatsCountEndCaption }}
      </div>
      <app-cat-list :catList="favoriteItems" />
    </div>
  </div>
</template>

<script>
import AppCatList from "@/components/AppCatList.vue";
import AppButton from "@/UI/AppButton.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AppCatList,
    AppButton,
  },
  computed: {
    ...mapGetters('favorite', ["favoriteItems", "favoriteItemsCount"]),
    getFavoriteCatsCountEndCaption() {
      if (this.favoriteItemsCount % 10 === 1 && (this.favoriteItemsCount !== 11)) return "кот";
      else if (this.favoriteItemsCount % 10 > 1 && this.favoriteItemsCount <= 4) return "кота";
      else if (this.favoriteItemsCount >= 4 || this.favoriteItemsCount === 11) return "котов";
    },
  },
};
</script>

<style lang="sass" scoped>
.go-back
  display: block
  color: #0640ee
  margin-top: -10px
  margin-bottom: 20px
  cursor: pointer

.favorite-icon
  width: 100px
  height: 100px
  margin: 10px auto

.cat-favorite-page
  display: flex
  flex-direction: column
  &__empty-favorite
    display: flex
    flex-direction: column
    align-content: center
    margin: 0 auto
    text-align: center
  &__title
    font-size: 20px
    font-weight: 700
    line-height: 21px
    margin-bottom: 20px
    @media screen and (max-width: 1027px)
      font-size: 16px
      line-height: 17px
      margin-bottom: 10px
</style>
