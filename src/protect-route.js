import store from './store';

export default async function(to, from, next) {
  if (localStorage.getItem('token') === null) {
    next('/');
  } else if (store.state.userRefreshed) {
    // fetch again
    // await store.dispatch('apolloQuery', {
    //   queryType: 'query',
    //   queryName: 'GET_RESTAURANT_DATA',
    // });
    // next(to);
  }
  next();
}
