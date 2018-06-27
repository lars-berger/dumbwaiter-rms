<script>
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
      fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.register.email,
          password: this.register.password,
        }),
      })
        .then(res => res.json())
        .then(data => {
          this.$router.push('/dashboard');
        });
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
