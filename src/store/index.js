import { createStore } from "vuex";
import catsModule from "./modules/cats";
import newsModule from "./modules/news";
import cartModule from "./modules/cart";
import favoriteModule from "./modules/favorite";

const store = createStore({
  modules: {
    cats: catsModule,
    news: newsModule,
    cart: cartModule,
    favorite: favoriteModule,
  },
});

export default store;
