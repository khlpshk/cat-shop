export default {
  namespaced: true,
  state() {
    return {
      cartItems: [],
    };
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
    cartItemsCount(state) {
      return state.cartItems.length;
    },
    cartItemsTotalPrice(state) {
      let sum = 0;
      state.cartItems.forEach((cartItem) => (sum += cartItem.price));
      return sum;
    },
  },
  mutations: {
    pushInCart(state, newCartItem) {
      state.cartItems.push(newCartItem);
    },
    deleteFromCart(state, deletingCartItem) {
      const index = state.cartItems.findIndex(
        (el) => el.id === deletingCartItem.id
      );
      state.cartItems.splice(index, 1);
    },
    cleanCart(state) {
      state.cartItems = [];
    },
  },
  actions: {
    async pushInCart({ commit }, newCartItem) {
      await commit("pushInCart", newCartItem);
    },
    async deleteFromCart({ commit }, deletingCartItem) {
      await commit("deleteFromCart", deletingCartItem);
    },
    async cleanCart({ commit }) {
      await commit("cleanCart");
    },
  },
};
