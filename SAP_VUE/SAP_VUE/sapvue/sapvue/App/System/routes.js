import index from '../pages/index.vue';
import vuejs from '../pages/vuejs.vue'
import auth from '../pages/auth.vue'
import js from '../pages/js.vue'
import cpp from '../pages/cpp.vue'
import linux from '../pages/linux.vue'
import page404 from '../pages/404.vue'


const redirectPage = '/';

export const routes = [
    { path: '/', component: index }, 
    { path: '/vuejs', component: vuejs },
    { path: '/auth', component: auth },
    { path: '/js', component: js },
    { path: '/cpp', component: cpp },
    { path: '/linux', component: linux },
    { path: '/*', component: page404 }
]