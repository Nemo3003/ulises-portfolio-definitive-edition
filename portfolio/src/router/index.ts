/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    // The session will remain, even if the user changes tabs
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/HomeView.vue")},
        { path: "/projects", component: () => import("../views/ProjectsView.vue")},
        { path: "/education", component: () => import("../views/EducationView.vue") },
        { path: "/about", component: () => import("../views/AboutView.vue") },
    ],
});

export default router;
