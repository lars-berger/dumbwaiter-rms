<script>
import LoginForm from '@/components/LoginForm/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm/RegisterForm.vue';
export default {
  name: 'Login',
  props: {
    msg: String,
  },
  components: {
    LoginForm,
    RegisterForm,
  },
  data: function() {
    return {
      imgUrl: '@/assets/images/test.jpg',
      showLogin: true,
    };
  },
  mounted() {
    if (window.location.pathname === '/register') {
      this.showLogin = false;
    }
  },
};
</script>

<template>
  <div class="Login">
    <div class="container">
      <div class="logo-container">
        <img class="logo-img" src="@/assets/images/temp-logo2.png" >
      </div>
      <div class="card">
        <div class="card-container">
          <LoginForm v-if="showLogin"/>
          <RegisterForm v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./LoginRegister.css">

