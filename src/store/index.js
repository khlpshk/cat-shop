import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cats: [
        {
          id: 0,
          name: "Кот полосатый",
          price: 30000,
          age: 3,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Коричневый окрас",
          url: "img-1.png",
          discount: 40,
        },
        {
          id: 1,
          name: "Кот крутой",
          price: 50000,
          age: 2,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Черный окрас",
          url: "img-3.png",
          discount: undefined,
        },
        {
          id: 2,
          name: "Кот ворчливый",
          price: 20000,
          age: 5,
          paws: 4,
          isSold: true,
          inCart: false,
          inFavorite: false,
          color: "Рыжий окрас",
          url: "img-2.png",
          discount: undefined,
        },
        {
          id: 3,
          name: "Кот полосатый",
          price: 35000,
          age: 4,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Серый окрас",
          url: "img-3.png",
          discount: 30,
        },
        {
          id: 4,
          name: "Кот волосатый",
          price: 10000,
          age: 7,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Белый окрас",
          url: "img-2.png",
          discount: undefined,
        },
        {
          id: 5,
          name: "Кот жирный",
          price: 40000,
          age: 12,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Черный окрас",
          url: "img-1.png",
          discount: undefined,
        },
        {
          id: 6,
          name: "Кот полосатый",
          price: 33000,
          age: 5,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Коричневый окрас",
          url: "img-3.png",
          discount: 50,
        },
        {
          id: 7,
          name: "Кот полосатый",
          price: 30000,
          age: 3,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Коричневый окрас",
          url: "img-2.png",
          discount: undefined,
        },
        {
          id: 8,
          name: "Кот крутой",
          price: 50000,
          age: 2,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Черный окрас",
          url: "img-3.png",
          discount: undefined,
        },
        {
          id: 9,
          name: "Кот ворчливый",
          price: 20000,
          age: 5,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Рыжий окрас",
          url: "img-1.png",
          discount: 40,
        },
        {
          id: 10,
          name: "Кот полосатый",
          price: 35000,
          age: 4,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Серый окрас",
          url: "img-3.png",
          discount: undefined,
        },
        {
          id: 11,
          name: "Кот волосатый",
          price: 10000,
          age: 7,
          paws: 4,
          isSold: true,
          inCart: false,
          inFavorite: false,
          color: "Белый окрас",
          url: "img-2.png",
          discount: undefined,
        },
        {
          id: 12,
          name: "Кот жирный",
          price: 40000,
          age: 12,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Черный окрас",
          url: "img-1.png",
          discount: 40,
        },
        {
          id: 13,
          name: "Кот полосатый",
          price: 33000,
          age: 5,
          paws: 4,
          isSold: false,
          inCart: false,
          inFavorite: false,
          color: "Коричневый окрас",
          url: "img-3.png",
          discount: undefined,
        },
      ],
      burgerOpened: true,
    };
  },
  getters: {
    bur(state) {
      return state.burgerOpened;
    },
    cats(state) {
      return state.cats;
    },
    catsCount(state) {
      return state.cats.length;
    },
    cartItems(state) {
      return state.cats.filter((cat) => cat.inCart);
    },
    favoriteItems(state) {
      return state.cats.filter((cat) => cat.inFavorite);
    },
    cartItemsCount(state) {
      return state.cats.filter((cat) => cat.inCart).length;
    },
    // TODO : 
    cartItemsTotalPrice(state) {
      let sum = 0
      state.cats.filter((cat) => cat.inCart).forEach(cartItem => sum += cartItem.price)
      return sum;
    },
    // end TODO
    favoriteItemsCount(state) {
      return state.cats.filter((cat) => cat.inFavorite).length;
    },
  },
  mutations: {
    changeCartItems(state, id) {
      let idx = state.cats.findIndex((cat) => cat.id === id);
      state.cats[idx].inCart = !state.cats[idx].inCart;
    },
    cleanCart(state) {
      state.cats.filter((cat) => cat.inCart).forEach(cartItem => cartItem.inCart = false)
    },
    changeFavoriteItems(state, id) {
      let idx = state.cats.findIndex((cat) => cat.id === id);
      state.cats[idx].inFavorite = !state.cats[idx].inFavorite;
    },
    sortByPrice(state, sortOption) {
      if (sortOption) state.cats.sort((prev, next) => next.price - prev.price);
      else state.cats.sort((prev, next) => prev.price - next.price);
    },
    sortByAge(state, sortOption) {
      if (sortOption) state.cats.sort((prev, next) => next.age - prev.age);
      else state.cats.sort((prev, next) => prev.age - next.age);
    },
    getImgUrl(state, url) {
      return require("@/assets/img/" + url);
    }
  },
  actions: {},
});

export default store;
