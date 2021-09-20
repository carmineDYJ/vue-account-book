import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import KeepAccount from '@/views/KeepAccount.vue';
import Tags from '@/views/Tags.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import TagEdit from '@/views/TagEdit.vue';

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
  },
  {
    path: '/tags/edit/:id',
    component: TagEdit,
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
