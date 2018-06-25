<script>
  import TopNav from '@/components/TopNav/TopNav.vue';
  import SideNav from '@/components/SideNav/SideNav.vue';
  export default {
    name: 'Login',
    props: {},
    components: {
      TopNav,
      SideNav,
    },
    data: () => ({
      showLogin: true,
    }),
  };
</script>

<template>
  <div class="Dashboard">
    <SideNav />

    <div class="dash-container">
      <TopNav />

      <div class="content">
        <h1>MENU</h1>

      <button>+ FOOD</button>
      <button>+ DRINK</button>
      <button>+ DESERT</button>
      
        <div class="menu-nav">
          <ul class="menu-nav-left">
            <a class="menu-nav-selected" href="#">
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
  @import 'Menu.css';
</style>