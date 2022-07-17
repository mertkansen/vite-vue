import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import User from "../pages/User.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/user/:id", component: User, name: "User" },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
