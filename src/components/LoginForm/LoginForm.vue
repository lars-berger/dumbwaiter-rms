<script>
import api from '@/api';
export default {
  name: 'Login',
  props: {
    msg: String,
  },
  data: () => ({
    login: {
      email: 'lars.berger@yahoo.com',
      password: 'test',
    },
    errorMessage: null,
  }),
  methods: {
    async handleSubmit() {
      const data = {
        username: this.login.email,
        password: this.login.password,
      };

      if (!data.username || !data.password) {
        this.errorMessage =
          'Please provide a username and password';
      }

      const user = await api
        .request('POST', '/login-rms', data)
        .catch(() => false);

      console.log(user);

      if (!user || !user.token) {
        this.errorMessage = 'Incorrect login credentials';
      }

      if (user.token) {
        await localStorage.setItem('token', user.token);
        await this.$store.dispatch('apolloQuery', {
          queryType: 'query',
          queryName: 'GET_RESTAURANT_DATA',
        });
        this.$router.push('/orders');
      }
    },
  },
};
</script>

<template>
  <form class="card-form" @submit.prevent="handleSubmit">
    <input v-model="login.email" type="text" placeholder="Email">
    <input v-model="login.password" type="text" placeholder="Password">
    <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
        <input type="submit" value="LOG IN" class="btn btn-login">
    <div class="card-buttons">
        <a class="" href="/register">Register</a>
        <a class="" href="#">Forgot password</a>
    </div>
  </form>
</template>
