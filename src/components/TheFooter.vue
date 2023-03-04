<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__appeal">
          <h2>Успей купить!</h2>
          <p>Подпишись и успей словить все акиции</p>
        </div>
        <app-form-control class="footer__form" />
      </div>
    </div>
  </footer>
</template>

<script>
import AppFormControl from "@/components/TheFooterFormControl.vue";

export default {
  components: { AppFormControl },
};
</script>

<style lang="sass">
.footer
  padding: 90px 0
  background-color: #1F2021
  color: #fff
  font-weight: 400
  font-size: 14px
  line-height: 17px
  @media screen and (max-width: 767px)
    padding: 40px 0

  &__content
    display: flex
    justify-content: space-between
    gap: 87px
    @media screen and (max-width: 603px)
      justify-content: center

  &__appeal
    display: flex
    flex-direction: column
    gap: 26px
    flex-basis: 40%
    font-weight: 400
    font-size: 28px
    line-height: 29px
    @media screen and (max-width: 676px)
      font-size: 20px
      line-height: 21px
      gap: 18px
    @media screen and (max-width: 603px)
      display: none
    &>h2
      font-weight: 700
      font-size: 48px
      line-height: 49px
      @media screen and (max-width: 676px)
        font-size: 30px
        line-height: 31px

  &__form
    flex-basis: 50%
</style>
