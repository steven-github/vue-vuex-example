import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.css";

createApp(App).use(store).use(store).mount("#app");
