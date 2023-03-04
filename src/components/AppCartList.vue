<template>
  <div class="cart-list">
    <app-cart-list-item v-for="cartItem in cartItems" :key="cartItem.id" :cartItem="cartItem" />
  </div>
</template>

<script>
import AppCartListItem from "@/components/AppCartListItem.vue";

export default {
  props: ["cartItems"],
  components: { AppCartListItem },
};
</script>

<style></style>
