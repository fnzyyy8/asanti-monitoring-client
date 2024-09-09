import {createRouter, createWebHistory} from 'vue-router';
import LoginView from "@/views/users/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import CountView from "@/views/CountView.vue";
import TaskView from "@/views/TaskView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: DashboardView,
        },
        {
            path: '/users/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/testing/count',
            name: 'Counting',
            component: CountView
        },
        {
            path: '/task',
            name: 'Task',
            component: TaskView
        },


    ]
});

export default router;
