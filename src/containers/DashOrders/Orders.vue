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
@import '/@/components/TopNav/TopNav.css';
@import 'Orders.css';
</style>