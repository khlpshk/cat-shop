<template>
  <!-- <not-developed /> -->
  <div class="about">
    <h1>О сайте</h1>
    <div class="about">
      <p>
        Данный сайт был создан в учебных целях. Здесь нельзя купить что-либо.
      </p>
      <p>
        Имена котов, цены были взяты с сайта
        <a href="https://www.avito.ru/company">Avito</a>. При нажатии на имя
        кота, будет совершен переход на страничку авито с данным котом
      </p>
      <p>
        Новости про котов были взяты с сайта
        <a href="https://www.murcat.ru/">Мурлыка</a>.
        В каждой новости будут ссылки на источник, откуда была взята информация.
      </p>
    </div>
  </div>
</template>

<script>
import NotDeveloped from "@/components/NotDeveloped.vue";
export default {
  components: { NotDeveloped },
};
</script>

<style lang="sass" scoped>
h1
  display: block
  text-align: center
  margin-bottom: 15px
p
  margin-bottom: 10px
</style>
