import index from '../pages/index.vue';
import auth from '../pages/auth.vue'
import tasks from '../pages/tasks.vue';

const redirectPage = '/';

export const routes = [
    {
        path: '/',
        component: index,
        meta: {
            layout: '_mainLayout'
        }
    },
    {
        path: '/index',
        component: index,
        meta: {
            layout: '_mainLayout'
        }
    },
    {
        path: '/auth',
        component: auth,
        meta: {
            layout: '_authLayout'
        }
    },
    {
        path: '/tasks',
        component: tasks,
        meta: {
            layout: '_mainLayout'
        }
    }
]