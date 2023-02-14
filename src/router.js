import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main";
import Gallery from "@/views/Gallery";
import News from "@/views/News";
import About from "@/views/About";
import CartItems from "@/views/CartItems";
import FavoriteItems from "@/views/FavoriteItems";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: '/cart',
      component: CartItems,
      props: true,
    },
    {
      path: '/favorite',
      component: FavoriteItems,
      props: true,
    },
    {
      path: "/gallery",
      component: Gallery,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
  linkActiveClass: "navbar__link_active",
  linkExactActiveClass: "active",
});

export default router;
