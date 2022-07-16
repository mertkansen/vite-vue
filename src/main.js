import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./routes/routes";

import "./styles/style.css";
import App from "./App.vue";

// Create a pinia instance (the root store) and pass it to the app as a plugin:
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
