import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import VueMeta from 'vue-meta';
import { changeLang } from '@shared/utils/router';
import { getCasKayttajaKieli } from '@shared/api/common';
import * as _ from 'lodash';
import RouteRoot from '@/views/RouteRoot.vue';
import RouteHome from '@/views/RouteHome.vue';
import { stores } from '@/stores';


Vue.use(VueRouter);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

const props = (route: any) => {
  return {
    ...route.params,
    ...stores,
  };
};

const router = new VueRouter({
  routes: [{
    path: '',
  }, {
    path: '/',
  }, {
    path: '/:lang',
    component: RouteRoot,
    props,
    children: [{
      path: '',
      name: 'root',
      component: RouteHome,
      props,
    }],
  }],
});

router.beforeEach(async (to, from, next) => {
  if (!_.get(to.params, 'lang')) {
    router.push({ path: '/' + await getCasKayttajaKieli() });
  }

  next();
});

router.beforeEach((to, from, next) => {
  changeLang(to, from);
  next();
});

export default router;
