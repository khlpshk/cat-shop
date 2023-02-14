<template>
  <form class="form-control" @submit.prevent>
    <div class="form-control__group">
      <app-input-text placeholder="Email" />
      <app-button btnText="Подписаться" />
    </div>
    <div class="form-control__group">
      <app-input-checkbox
        checkboxId="notifications"
        checkboxText="Подписаться на новости"
      />
    </div>
  </form>
</template>

<script>
import AppButton from "@/UI/AppButton.vue";
import AppInputText from "@/UI/AppInputText.vue";
import AppInputCheckbox from "@/UI/AppInputCheckbox.vue";

export default {
  components: { AppButton, AppInputText, AppInputCheckbox },
};
</script>

<style lang="sass">
.form-control
  &__group
    display: flex
    flex-flow: row wrap
    justify-content: flex-start
    gap: 18px
    margin-bottom: 24px
</style>
