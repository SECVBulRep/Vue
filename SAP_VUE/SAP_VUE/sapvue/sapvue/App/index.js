import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from "./System/routes"

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

