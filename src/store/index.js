import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import subscriptions from './subscriptions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  subscriptions,
});
