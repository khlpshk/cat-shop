<template>
  <nav class="navbar">
    <li class="navbar__item">
      <router-link class="navbar__link" to="/">Главная</router-link>
    </li>
    <li class="navbar__item">
      <router-link class="navbar__link" to="/galery">Галерея</router-link>
    </li>
    <li class="navbar__item">
      <router-link class="navbar__link" to="/news">Новости</router-link>
    </li>
    <li class="navbar__item">
      <router-link class="navbar__link" to="/about">О сайте</router-link>
    </li>
  </nav>
</template>

<style lang="sass">
.navbar
  display: flex
  flex-flow: row nowrap
  gap: 53px
  @media screen and ( max-width:  $tableWidth)
    gap: 27px
  @media screen and (max-width: 767px)
    font-size: 30px
    position: relative
    flex-direction: column
    gap: 0px

  &__item
    display: block

  &__link
    display: block
    font-size: 20px
    line-height: 21px
    color: #fff
    padding-bottom: 6px
    @media screen and (max-width: 767px)
      font-size: 20px
      margin-bottom: 15px
    &.active
      color: #466abf
      border-bottom: 3px solid #466abf
      padding-bottom: 3px
      @media screen and (max-width: 767px)
        border: none
        font-size: 22px
        font-weight: 700
    &:hover
      color: #466abf
</style>
