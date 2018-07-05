<script>
export default {
  name: 'ordermodal',
  props: {
    tableData: Object,
    handleTableClick: Function,
  },
  data: function() {
    return {
      showModal: false,
    };
  },
  mounted() {
    this.showModal = true;
  },
  methods: {},
};
</script>

<template>
  <div class="NewEventModal">
    <div id="modal" :class="{'modal-visible': showModal}">
      <div class="modal-container">
        <i @click="handleTableClick(null, null, 'a')" class="material-icons close-modal">close</i>
        <h2>TABLE DETAILS</h2>
        <hr>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="modal-inputs-container">

            <div class="btn-markcomplete">
              <a class="btn" href="#">CLOSE CONNECTION</a>
            </div>

            <div v-if="!tableData" class="modal-emptystate">NO ORDERS HAVE BEEN PLACED YET</div>
            <div class="order-modal-container">
            <div v-if="tableData" v-for="(orders, index) in tableData.orders" :key="index" class="">
              <div v-for="(item, index) in orders.products" :key="index" class="order-item-container">
                <div class="order-item-left">
                  <img class="order-item-img" :src="item.product.photos[0].url">
                  <div class="order-item-text">
                    <p class="order-item-name">{{item.product.name}}</p>
                    <p v-if="item.extraInfo">{{item.extraInfo}}</p>
                  </div>
                </div>
                <div class="order-item-right">
                  <a class="btn btn-markstatus" href="#">
                    <i class="material-icons">outlined_flag</i>in-progress</a>
                  <a class="btn btn-markstatus" href="#">
                    <i class="material-icons">check</i>completed</a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div @click="handleTableClick(null, null, 'a')" :class="{'modal-visible': showModal}" id="mask"></div>
  </div>
</template>

<style src="./ConnectionModal.css" scoped>

