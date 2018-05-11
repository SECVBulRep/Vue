import './assets/css/site.css'
import './assets/css/temp.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
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

