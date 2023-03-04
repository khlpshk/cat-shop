<template>
  <div class="contacts">
    <div class="contacts__item">
      <a href="tel:+544 3490 00000" class="contacts__phone-number"
        >+544 3490 00000</a
      >
      <span class="contacts__label">Звони скорее!</span>
    </div>
  </div>
</template>

<style lang="sass">
.contacts
  display: flex
  flex-flow: column
  row-gap: 10px
  color: #fff

  &__item
    display: flex
    flex-direction: column
    row-gap: 5px

  &__label
    display: block
    margin-left: auto
    margin-right: 0
    @media screen and (max-width: 767px)
      display: none

  &__phone-number
    display: block
    font-weight: 700
    font-size: 24px
    line-height: 29px
    color: #fff
    &:hover
      color: #466abf
    @media screen and (max-width: 767px)
      font-size: 20px
      margin-right: 35px
      margin-bottom: 5px
      text-align: right
</style>
