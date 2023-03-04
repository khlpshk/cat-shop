import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main";
import Galery from "@/views/Galery";
import News from "@/views/News";
import AppNewsList from "@/components/AppNewsList";
import AppNewsPage from "@/components/AppNewsPage";
import About from "@/views/About";
import CartItems from "@/views/CartItems";
import Favorite from "@/views/Favorite";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/cart",
      component: CartItems,
    },
    {
      path: "/favorite",
      component: Favorite,
    },
    {
      path: "/galery",
      component: Galery,
    },
    {
      path: "/news",
      component: News,
      children: [
        {
          path: "",
          name: "newsList",
          component: AppNewsList,
        },
        {
          path: ":newsItemId",
          name: "newsPage",
          component: AppNewsPage,
          props: (route) => ({
            ...route.params,
          }),
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
  ],
  scrollBehavior(to, from, savePosition) {
    return { top: 0, left: 0 };
  },
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
