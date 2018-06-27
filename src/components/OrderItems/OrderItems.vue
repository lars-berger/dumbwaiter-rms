<template>
  <div class="orders-container">
    <div v-for="order in orders" :key="order.id" class="order">
      <div class="order-header">
        <h4 class="order-header-orderid">Order #{{order.orderId}}</h4>
        <div class="order-header-timestamp">
          <i class="material-icons">access_time</i>
          <span>32 min ago</span>
        </div>
      </div>
      <hr class="order-header-underline">

      <div v-for="(item, index) in order.orderItems" :key="index" class="order-item">
        <img class="order-item-img" src="@/assets/images/burger.png" alt="" srcset="">
        <div class="order-item-text">
          <p class="order-item-name">{{item.quantity}} x {{item.name}}</p>
          <p v-if="item.extraInfo">{{item.extraInfo}}</p>
        </div>
      </div>

      <div class="order-buttons">
        <a href="#"><i class="material-icons">outlined_flag</i></a>
        <a href="#"><i class="material-icons">update</i></a>
        <a href="#"><i class="material-icons">check</i></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      orders: Array,
    },
    methods: {
      formatTimestamp(timestamp) {
        console.log('f');
      },
    },
  };
</script>