import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import gde from '@/components/systemAdministration/gde';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/gde',
      name: 'gde',
      component: gde,
    },
  ],
});
