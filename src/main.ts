import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import { router } from "./navigation/router";
import { VueQueryPlugin } from "@tanstack/vue-query";

createApp(App).use(router).use(VueQueryPlugin).mount("#app");
