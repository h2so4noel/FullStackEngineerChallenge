import Vue from 'vue';
import VueRouter from 'vue-router';
import ReviewPage from '../views/ReviewPage.vue';
import EmployeePage from '../views/EmployeePage.vue';
import MyPage from '../views/MyPage.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/review',
  },
  // Admin view for list of all reviews in system
  {
    path: '/reviews',
    name: 'ReviewPage',
    component: ReviewPage,
  },
  // Admin view for list of all employees in system
  {
    path: '/employees',
    name: 'EmployeePage',
    component: EmployeePage,
  },
  {
    path: '/:employeeId',
    name: 'MyPage',
    component: MyPage,
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
