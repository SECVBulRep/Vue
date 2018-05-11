import index from '../Pages/index.vue';
import vuejs from '../Pages/vuejs.vue'
import auth from '../Pages/auth.vue'
import js from '../Pages/js.vue'
import cpp from '../Pages/cpp.vue'
import linux from '../Pages/linux.vue'

export const routes = [
    { path: '/', component: index }, 
    { path: '/vuejs', component: vuejs },
    { path: '/auth', component: auth },
    { path: '/js', component: js },
    { path: '/cpp', component: cpp },
    { path: '/linux', component: linux }
]