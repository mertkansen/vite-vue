import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import User from "../pages/User.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/user/:id", component: User },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
