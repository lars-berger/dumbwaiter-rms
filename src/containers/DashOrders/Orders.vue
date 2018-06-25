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
        <h1>ORDERS</h1>
        <div class="orders-container">
          <div class="order">
            <p>Hamburger w/ fries</p>
            <p>Qty: 1</p>
            <p>Table: 35</p>
            <button>mark complete</button>
          </div>
          <div class="order">
            <p>Hamburger w/ fries</p>
            <p>Qty: 1</p>
            <p>Table: 35</p>
            <button>mark complete</button>
          </div>
          <div class="order">
            <p>Hamburger w/ fries</p>
            <p>Qty: 1</p>
            <p>Table: 35</p>
            <button>mark complete</button>
          </div>
          <div class="order">
            <p>Hamburger w/ fries</p>
            <p>Qty: 1</p>
            <p>Table: 35</p>
            <button>mark complete</button>
          </div>
          <div class="order">
            <p>Hamburger w/ fries</p>
            <p>Qty: 1</p>
            <p>Table: 35</p>
            <button>mark complete</button>
          </div>
          <div class="order">
            <p>Hamburger w/ fries</p>
            <p>Qty: 1</p>
            <p>Table: 35</p>
            <button>mark complete</button>
          </div>
          <div class="order">
            <p>Hamburger w/ fries</p>
            <p>Qty: 1</p>
            <p>Table: 35</p>
            <button>mark complete</button>
          </div>
          <div class="order">
            <p>Hamburger w/ fries</p>
            <p>Qty: 1</p>
            <p>Table: 35</p>
            <button>mark complete</button>
          </div>
        </div>

      </div>


    </div>



  </div>
</template>

<style lang="scss" scoped>
@import 'Orders.css';
</style>