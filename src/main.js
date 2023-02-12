import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import VueScrollTo from "vue-scrollto";

library.add(faBars);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueScrollTo, { container: "#container", duration: 200 })
  .mount("#app");
