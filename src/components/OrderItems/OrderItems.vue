<template>
  <div class="orders-container">
    <div @click="toggleModal('complete')" v-for="order in orders" :key="order.id" class="order">
      <div class="order-header">
        <h4 class="order-header-orderid">Order #{{order.id}}</h4>
        <div class="order-header-timestamp">
          <i class="material-icons">access_time</i>
          <span>{{formatTimestamp(order.createdAt)}}</span>
        </div>
      </div>
      <hr class="order-header-underline">

<div v-if="complete">

</div>
      <div v-else class="order-buttons">
        <a @click="toggleModal('cooking')" href="#"><i class="material-icons">outlined_flag</i>COOKING</a>
        <a @click="toggleModal('countdown')" href="#"><i class="material-icons">update</i>COUNTDOWN</a>
        <a @click="toggleModal('complete')" href="#"><i class="material-icons">check</i>COMPLETE</a>

      </div>

      <div class="order-items-container">
      <div v-for="(item, index) in order.products" :key="index" class="order-item">
        <img class="order-item-img" :src="item.product.photos[0].url" alt="" srcset="">
        <div class="order-item-text">
          <p class="order-item-name">{{item.product.name}}</p>
          <p v-if="item.extraInfo">{{item.extraInfo}}</p>
        </div>
      </div>
</div>


    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: Array,
    toggleModal: Function,
    complete: Boolean,
  },
  data: function() {
    return {
      asdf: new Date(),
    };
  },
  methods: {
    formatTimestamp(timestamp) {},
  },
};
</script>
