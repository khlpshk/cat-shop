<template>
  <div class="not-developed-page">
    <div class="not-developed-page__icon">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100px"
        height="100px"
        viewBox="0 0 510 510"
        style="enable-background: new 0 0 510 510"
        xml:space="preserve"
      >
        <g>
          <g id="do-not-disturb">
            <path
              d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M51,255c0-112.2,91.8-204,204-204    c45.9,0,89.25,15.3,124.95,43.35l-285.6,285.6C66.3,344.25,51,300.9,51,255z M255,459c-45.9,0-89.25-15.3-124.95-43.35    L415.65,130.05C443.7,165.75,459,209.1,459,255C459,367.2,367.2,459,255,459z"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="not-developed-page__title">
      Данная страница находится в разработке
    </div>
    <div class="not-developed-page__button">
      <app-button
        btnText="Вернуться на главную"
        @action="$router.push('/')"
      />
    </div>
  </div>
</template>

<script>
import AppButton from "@/UI/AppButton.vue";
export default {
  components: { AppButton },
};
</script>

<style lang="sass" scoped>
.not-developed-page
  display: flex
  flex-direction: column
  &__icon
    width: 100px
    height: 100px
    margin: 10px auto 20px
  &__title
    font-size: 20px
    font-weight: 700
    line-height: 21px
    margin: 0 auto
    margin-bottom: 20px
    @media screen and (max-width: 1027px)
      font-size: 16px
      line-height: 17px
      margin-bottom: 10px
  &__button
    margin: 0 auto
</style>
