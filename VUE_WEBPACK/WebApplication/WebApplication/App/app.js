import './assets/css/bootstrap.css';

import Vue from 'vue';
import App from './app.vue';

import appMessage from './components/message.vue';
import appQuestion from './components/question.vue';
import appResultScreen from './components/resultScreen.vue';
import appStart from './components/start.vue';

Vue.component('AppMessage', appMessage);
Vue.component('AppQuestion', appQuestion);
Vue.component('appResultScreen', appResultScreen );
Vue.component('AppStart', appStart);

var v = new Vue({
    el: '#app',
    render: h => h(App)
});

