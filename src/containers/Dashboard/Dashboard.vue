<script>
  export default {
    name: 'Login',
    props: {},
    components: {},
    data: () => ({
      showLogin: true,
    }),
  };
</script>

<template>
  <div class="Dashboard">

    <div class="navbar">

      <ul class="navbar-left">
        <a href="#">
          <i class="material-icons">notes</i>
        </a>
      </ul>

      <ul class="navbar-right">
        <li>
          <a href="#">
            <i class="material-icons">notifications</i>
          </a>
        </li>
        <li class="navbar-name">Bob's Burgers</li>
        <li>
          <a href="#">
            <i class="material-icons dropdown-icon">arrow_drop_down</i>
          </a>
        </li>
      </ul>
    </div>

    <div class="flex-container">
      <div class="sidebar">
        <ul>
          <li>Orders</li>
          <li>Menu</li>
          <li>Tables</li>
        </ul>
      </div>

      <div class="content">
        <h1>ORDERS</h1>
        <p>welcome to the dashboard my dudes</p>

      </div>
    </div>


  </div>
</template>

<style lang="scss" scoped>
  @import 'Dashboard.css';
</style>