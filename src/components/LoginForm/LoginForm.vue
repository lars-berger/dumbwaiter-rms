<script>
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
      const fetch = await fetch(
        'http://localhost:8080/log-in',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.login.email,
            password: this.login.password,
          }),
        }
      )
        .then(res => res.json())
        .catch(data => false);
        
      if (fetch) {
        await this.$store.dispatch('fetchRestaurantData', fetch.id);  //fetch.id is the user's id
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
        <input type="submit" value="Submit" class="btn btn-login">
      </div>
      <div class="card-buttons-right">
        <a class="btn-login-right" href="/register">Register</a>
        <a class="btn-login-right" href="#">Forgot password</a>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
</style>
