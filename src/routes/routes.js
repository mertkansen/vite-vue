import { createRouter, createWebHashHistory } from "vue-router";

import { routeConfig } from "./routeConfig";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routeConfig,
});
