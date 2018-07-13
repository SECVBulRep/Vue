import './assets/css/site.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

import { routes } from "./system/routes"

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes
});

var v = new Vue({
    el: '#app',
    router, 
    render: h => h(App)
});

