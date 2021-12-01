import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../my-vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import(/* webpackChunkName: "music" */ '../views/music/index.vue'),
    redirect:'/music/pop',
    children:[
      {
        path: 'pop',
        component: () => import(/* webpackChunkName: "music" */ '../views/music/components/pop.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// router.afterEach(() => {
// })

export default router
