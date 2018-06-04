import './assets/css/site.css'
import './assets/css/temp.css'

import Vue from 'vue'
import App from './app.vue'

 
var v = new Vue({
    el: '#app',
    render: h => h(App)
});

