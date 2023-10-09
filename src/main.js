import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";

const app = createApp(App);

app.component("Tabs", Tabs);
app.component("Tab", Tab);

app.mount("#app");
