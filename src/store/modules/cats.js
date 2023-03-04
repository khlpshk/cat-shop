import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      cats: [],
      isCatsLoading: false,
    };
  },
  getters: {
    cats(state) {
      return state.cats;
    },
    catsCount(state) {
      return state.cats.length;
    },
    catImgs(state) {
      const cat_imgs = [];
      state.cats.forEach((cat) => {
        let cat_img = {
          id: cat.id,
          url: cat.img_url,
          name: cat.name,
        };
        cat_imgs.push(cat_img);
      });
      // this.currentImg = cat_imgs[0];
      return cat_imgs;
    },
    isCatsLoading(state) {
      return state.isCatsLoading;
    },
  },
  mutations: {
    setCats(state, data) {
      state.isCatsLoading;
      state.cats = data;
    },
    setMoreCats(state, data) {
      state.cats = [...state.cats, ...data];
    },
    // TODO: изменить название метода
    changeCatCartValue(state, id) {
      let idx = state.cats.findIndex((cat) => cat.id === id);
      state.cats[idx].inCart = !state.cats[idx].inCart;
    },
    changeCatCartValues(state) {
      // TODO: как-то упростить
      state.cats.forEach((cat) => {
        if (cat.inCart) {
          cat.inCart = false;
        }
      });
    },
    // end TODO
    changeCatFavoriteValue(state, id) {
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
  },
  actions: {
    async changeCatCartValue({ commit }, id) {
      await commit("changeCatCartValue", id);
    },
    async changeCatCartValues({ commit }) {
      await commit("changeCatCartValues");
    },
    async changeCatFavoriteValue({ commit }, id) {
      await commit("changeCatFavoriteValue", id);
    },
    async sortByPrice({ commit }, descSort) {
      await commit("sortByPrice", descSort);
    },
    async sortByAge({ commit }, descSort) {
      await commit("sortByAge", descSort);
    },
    async getCats({ commit, state }) {
      // const url = "http://localhost:3000/cats?_start=0&_end=30";
      const url = "https://frontend-cat-shop-default-rtdb.europe-west1.firebasedatabase.app/cats.json"

      try {
        state.isCatsLoading = true;
        const { data } = await axios.get(url);

        if (!data) {
          throw new Error("Список котов пуст");
        }

        const cats = Object.keys(data).map((key) => {
          return {
            inCart: false,
            inFavorite: false,
            ...data[key],
          };
        });

        commit("setCats", cats);

        state.isCatsLoading = false;
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
