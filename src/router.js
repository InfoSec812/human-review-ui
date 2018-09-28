import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Login from './views/Login.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: Login,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
      ],
    },
  ],
});
