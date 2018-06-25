import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import Login from './components/Login';
// import Register from './components/Register/Register.vue'
// import Dashboard from './components/Dashboard/Dashboard.vue'

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Login },
    // { path: '/register', component: Register },
    // { path: '/dashboard', component: Dashboard }
  ],
});

new Vue({
  router,
  render: h => {
    return <router-view />;
  },
}).$mount('#app');
