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
  }),
  methods: {
    handleSubmit() {
      const data = {
        email: this.register.email,
        password: this.register.password,
      };

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
  <form @submit.prevent="handleSubmit">
    <div class="form-names">
      <input v-model="register.firstName" type="text" placeholder="First name">
      <input v-model="register.lastName" type="text" placeholder="Last name">
    </div>
    <input v-model="register.email" type="email" placeholder="Email">
    <input v-model="register.password" type="text" placeholder="Password">
    <div class="card-buttons">
      <div class="card-buttons-left">
        <input type="submit" value="Register" class="btn btn-login">
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
</style>
