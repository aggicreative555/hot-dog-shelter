import "../src/css/style.css";
import { initPreloader } from "./js/preloader";

import router from "./js/router";

const preloader = initPreloader({ timeout:2500 });

window.appPreloader = preloader;

await router(window.location.pathname);
