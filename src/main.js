import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import LoginRegister from './containers/LoginRegister/LoginRegister.vue';
import Orders from './containers/DashOrders/Orders.vue'
import Menu from './containers/DashMenu/Menu.vue'

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: LoginRegister },
    { path: '/register', component: LoginRegister },
    { path: '/orders', component: Orders },
    { path: '/menu', component: Menu },
  ],
});

new Vue({
  router,
  render: h => <router-view />,
}).$mount('#app');
