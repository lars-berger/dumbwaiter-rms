import Vue from 'vue';
import Login from './Login.vue';

const LoginPage = Vue.component('login', {
  components: {
    Login,
    // Sidebar,
    // Footer,
  },
  render: function(h) {
    return (
      <div>
        {/* <Sidebar /> */}
        <Login msg="fdsafdsa" />
        {/* <Footer /> */}
      </div>
    );
  },
});

export default LoginPage;
