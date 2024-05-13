import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import SingleProductPage from "@/views/SingleProductPage.vue";
import CartPage from "@/views/CartPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/product/:id", component: SingleProductPage },
  { path: "/cart", component: CartPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
