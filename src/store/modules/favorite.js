export default {
  namespaced: true,
  state() {
    return {
      favoriteItems: [],
    };
  },
  getters: {
    favoriteItems(state) {
      return state.favoriteItems;
    },
    favoriteItemsCount(state) {
      return state.favoriteItems.length;
    },
  },
  mutations: {
    addInFavorite(state, newFavoriteItem) {
      state.favoriteItems.push(newFavoriteItem);
    },
    deleteFromFavorite(state, deletingFavoriteItem) {
      const index = state.favoriteItems.findIndex(
        (el) => el.id === deletingFavoriteItem.id
      );
      state.favoriteItems.splice(index, 1);
    },
  },
  actions: {
    async addInFavorite({ commit }, newFavoriteItem) {
      await commit("addInFavorite", newFavoriteItem);
    },
    async deleteFromFavorite({ commit }, deletingFavoriteItem) {
      await commit("deleteFromFavorite", deletingFavoriteItem);
    },
  },
};
