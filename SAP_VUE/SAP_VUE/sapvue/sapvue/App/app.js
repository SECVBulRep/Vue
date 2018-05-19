import './assets/css/site.css'
import './assets/css/temp.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import {sync} from 'vuex-router-sync'


import App from './app.vue'
import { routes } from "./system/routes"
import store from "./store/modules/index";


Vue.use(VueRouter); 
export const router = new VueRouter({
        mode: 'history',
        routes
    });


sync(store,router);
 
var v = new Vue({
    el: '#app',
    store,
    router, 
    render: h => h(App)
});

