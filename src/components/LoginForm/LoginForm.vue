<script>
  import api from '@/api';
  export default {
    name: 'Login',
    props: {
      msg: String,
    },
    data: () => ({
      login: {
        email: '',
        password: '',
      },
    }),
    methods: {
      async handleSubmit() {
        const data = {
          username: this.login.email,
          password: this.login.password,
        };

        const user = await api
          .request('POST', '/login-rms', data)
          .catch(() => false);

        console.log(user);

        if (user.token) {
          await localStorage.setItem('token', user.token);
          await this.$store.dispatch(
            'fetchRestaurantData',
            fetch.id
          );
          this.$router.push('/dashboard');
        }

        // else handle login error
      },
    },
  };
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="login.email" type="text" placeholder="Email">
    <input v-model="login.password" type="text" placeholder="Password">
    <div class="card-buttons">
      <div class="card-buttons-left">
        <input type="submit" value="LOG IN" class="btn btn-login">
      </div>
      <div class="card-buttons-right">
        <a class="btn-login-right" href="/register">Register</a>
        <a class="btn" href="#">Forgot password</a>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
</style>