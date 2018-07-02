<script>
import api from '@/api';
export default {
  name: 'Register',
  props: {
    msg: String,
  },
  data: () => ({
    register: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    errorMessage: null,
  }),
  methods: {
    handleSubmit() {
      const data = {
        email: this.register.email,
        password: this.register.password,
      };

      if (!data.username || !data.password) {
        this.errorMessage =
          'Please provide a username and password';
      }

      api
        .request('POST', '/register', data)
        .then(res => {
          console.log(res);
          this.$router.push('/dashboard');
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<template>
  <form class="card-form" @submit.prevent="handleSubmit">
      <input v-model="register.firstName" type="text" placeholder="First name">
      <input v-model="register.lastName" type="text" placeholder="Last name">
    <input v-model="register.email" type="email" placeholder="Email">
    <input v-model="register.password" type="text" placeholder="Password">
    <div class="card-buttons">
        <input type="submit" value="Register" class="btn btn-register">
                <a class="" href="/">Login</a>

    </div>
  </form>
</template>

<style lang="scss" scoped>
</style>
