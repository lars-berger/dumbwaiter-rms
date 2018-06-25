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
    handleSubmit() {
      fetch('http://localhost:8080/log-in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.login.email,
          password: this.login.password,
        }),
      })
      .then(res => res.json())
      .then(data => {
        //handle redirect
      })
    },
  },
};
</script>

<template>
  <div class="Login">
    <div class="container">
      <div class="logo-container">
        <img class="logo-img" src="./temp-logo2.png" >
      </div>
      <div class="card">
        <div class="card-container">
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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'Login.css';
</style>
