import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import KeepAccount from '@/views/KeepAccount.vue';
import Tags from '@/views/Tags.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    redirect: '/keep-account',
  },
  {
    path: '/keep-account',
    component: KeepAccount,
  },
  {
    path: '/tags',
    component: Tags,
  },
  {
    path: '/statistics',
    component: Statistics,
  },{
    path: '*',
    component: NotFound,
  }
];

const router = new VueRouter({
  routes
});

export default router;
