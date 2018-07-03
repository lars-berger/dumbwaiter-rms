import Vue from 'vue';
import VueRouter from 'vue-router';
import ProtectRoute from './protect-route';

import LoginRegister from './containers/LoginRegister/LoginRegister.vue';
import Orders from './containers/DashOrders/Orders.vue';
import Menu from './containers/DashMenu/Menu.vue';
import Layout from './containers/DashLayout/Layout.vue';
import Tables from './containers/DashTables/Tables.vue';

import store from './store';

Vue.use(VueRouter);
Vue.config.devtools = true;

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: LoginRegister },
    { path: '/register', component: LoginRegister },
    {
      path: '/orders',
      component: Orders,
      beforeEnter: ProtectRoute,
    },
    {
      path: '/menu',
      component: Menu,
      beforeEnter: ProtectRoute,
    },
    {
      path: '/tables',
      component: Tables,
      beforeEnter: ProtectRoute,
    },
    {
      path: '/layout',
      component: Layout,
      beforeEnter: ProtectRoute,
    },
  ],
});

new Vue({
  data: {
    showModal: false,
  },
  router,
  store,
  render: h => <router-view />,
}).$mount('#app');
