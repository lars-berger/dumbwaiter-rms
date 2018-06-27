<script>
import OrderItems from '@/components/OrderItems/OrderItems.vue';
import TopNav from '@/components/TopNav/TopNav.vue';
import SideNav from '@/components/SideNav/SideNav.vue';
export default {
  name: 'Orders',
  props: {},
  components: {
    TopNav,
    SideNav,
    OrderItems,
  },
  data: function() {
    return {
      orders: this.$store.state.orders,
      completedOrders: [],
    };
  },
};
</script>

<template>
  <div class="Dashboard">
    <SideNav page="orders"/>


    <div class="dash-container">
      <TopNav />

      <div class="content">
        <h1>PENDING ORDERS</h1>
        <div class="orders-container">

          <div class="orders-empty-state" v-if="orders.length === 0">No orders</div>
          <OrderItems :orders="orders" v-else />
          
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

        <h1>COMPLETED ORDERS</h1>
          <div class="completed-container">
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
