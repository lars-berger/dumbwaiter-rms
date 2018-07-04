<script>
  export default {
    name: 'ordermodal',
    props: {
      order: Object,
      action: String,
      toggleModal: Function,
    },
    data: function () {
      return {
        showModal: false,
      };
    },
    mounted() {
      this.showModal = true;
    },
    methods: {
      updateProductStatus: async function (status, item) {

        await this.$store.dispatch('apolloQuery', {
          queryType: 'mutation',
          queryName: 'UPDATE_PRODUCT_STATUS',
          data: {
            id: item.id,
            status: status,
          }
        });
      },
    },
  };
</script>

<template>
  <div class="NewEventModal">
    <div id="modal" :class="{'modal-visible': showModal}">
      <div class="modal-container">
        <i @click="toggleModal" class="material-icons close-modal">close</i>
        <h2>ORDER DETAILS</h2>
        <hr>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="modal-inputs-container">

            <div class="btn-markcomplete">
              <a class="btn" href="#">MARK ENTIRE ORDER AS COMPLETE</a>
            </div>

            <div v-for="(item, index) in order.products" :key="index" class="order-item-container">
              <div class="order-item-left">
                <img class="order-item-img" :src="item.product.photos[0].url">
                <div class="order-item-text">
                  <p class="order-item-name">{{item.product.name}}</p>
                  <p v-if="item.extraInfo">{{item.extraInfo}}</p>
                </div>
              </div>
              <div class="order-item-right">
                <a @click="updateProductStatus('IN PROGRESS', item)" class="btn btn-markstatus" href="#">
                  <i class="material-icons">outlined_flag</i>in-progress</a>
                <a @click="updateProductStatus('DONE', item)" class="btn btn-markstatus" href="#">
                  <i class="material-icons">check</i>completed</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div @click="toggleModal" :class="{'modal-visible': showModal}" id="mask"></div>
  </div>
</template>

<style src="./OrderModal.css" scoped>