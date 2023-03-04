export default {
  namespaced: true,
  state() {
    return {
      news: [],
      newsCount: 0,
      isNewsLoading: false,
    };
  },
  getters: {
    news(state) {
      return state.news;
    },
    isNewsLoading(state) {
      return state.isNewsLoading;
    },
    newsCount(state) {
      return state.newsCount;
    }
  },
  mutations: {
    setNews(state, data) {
      state.news = data;
    },
  },
  actions: {
    async getNews({ commit, state }) {
      state.isNewsLoading = true;
      const url = "https://frontend-cat-shop-default-rtdb.europe-west1.firebasedatabase.app/news.json";
      await fetch(url, {
        method: "get",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          commit("setNews", data);
          return data;
        })
        .catch((error) => {
          console.log(error);
        });
      state.isNewsLoading = false;
    },
  },
};
