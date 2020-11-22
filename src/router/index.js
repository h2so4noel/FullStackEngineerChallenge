import Vue from 'vue'
import VueRouter from 'vue-router'
import ReviewPage from '../views/ReviewPage.vue'
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/review',
  },
  {
    path: '/reviews',
    name: 'ReviewPage',
    component: ReviewPage,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
