/*ресурсы*/
import './assets/css/site.css'

/*библиотеки*/
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import VeeValidate from 'vee-validate';


/*внутренние библиотеки*/
import store from "./store/store"
import { routes } from "./system/routes"

Vue.use(VueRouter);
Vue.use(VeeValidate);

export const router = new VueRouter({
    mode: 'history',
    routes
});

sync(store, router);

var v = new Vue({
    el: '#app',
    router, 
    store,
    render: h => h(App)
});

