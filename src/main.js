import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";

// Create a pinia instance (the root store) and pass it to the app as a plugin:
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.mount("#app");
