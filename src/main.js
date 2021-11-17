import Vue from "vue";
import App from "./App.vue";
import Store from "./store";
import Router from "./router/index";

const app = new Vue({
    store: Store,
    router: Router,
    ...App,
});
app.$mount("#app");
