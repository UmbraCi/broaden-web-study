import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    // {
    //   path: "/",
    //   name: "Home",
    //   component: Home,
    // },
    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // },
    {
        path: '/',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/home/index.vue'),
            },
            {
                path: 'login',
                component: () => import('@/views/login/index.vue'),
            },
        ],
    },
]

const router = new VueRouter({
    routes,
})

export default router
