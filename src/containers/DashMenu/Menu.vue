<script>
  import TopNav from '@/components/TopNav/TopNav.vue';
  export default {
    name: 'Login',
    props: {},
    components: {
      TopNav,
    },
    data: () => ({
      showLogin: true,
    }),
  };
</script>

<template>
  <div class="Dashboard">
    <div class="sidebar">
      <a href="#">
        <div class="sidebar-hamburger">
          <i class="material-icons">notes</i>
        </div>
      </a>
      <div class="sidebar-content">
        <ul>
          <a href="#">
            <li class="selected">
              <i class="material-icons">assignment_late</i>
            </li>
          </a>
          <a href="#">
            <li>
              <i class="material-icons">fastfood</i>
            </li>
          </a>
          <a href="#">
            <li>
              <i class="material-icons">view_quilt</i>
            </li>
          </a>
          <a href="#">
            <li>
              <i class="material-icons">settings</i>
            </li>
          </a>
        </ul>
      </div>
    </div>

    <div class="dash-container">
      <TopNav />


      <div class="content">
        <h1>MENU</h1>

        <div class="subnav">
          <ul class="subnav-left">
            <a class="subnav-selected" href="#">
              <li>FOOD</li>
            </a>
            <a href="#">
              <li>DRINKS</li>
            </a>
            <a href="#">
              <li>DESERTS</li>
            </a>
          </ul>
        </div>

      </div>


    </div>



  </div>
</template>

<style lang="scss" scoped>
  @import 'Dashboard.css';
</style>