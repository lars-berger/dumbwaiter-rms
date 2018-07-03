<script>
export default {
  name: 'ordermodal',
  props: {
    order: Object,
    action: String,
    toggleModal: Function,
  },
  data: function() {
    return {
      showModal: false,
    };
  },
  mounted() {
    console.log(this.order);
    this.showModal = true;
  },
  methods: {
    handleSubmit() {
      console.log('ff');
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

            <div v-for="(item, index) in order.orderItems" :key="index" class="order-item">
              <img class="order-item-img" src="@/assets/images/burger.png" alt="" srcset="">
              <div class="order-item-text">
                <p class="order-item-name">{{item.quantity}} x {{item.name}}</p>
                <p v-if="item.extraInfo">{{item.extraInfo}}</p>
              </div>
            </div>

          <div class="form-buttons-wrapper">
            <p id="addnew-error"></p>
            <input type="submit" class="btn addnew-submit" value="SAVE CHANGES" />
          </div>
          </div>
        </form>
      </div>
    </div>
    <div @click="toggleModal" :class="{'modal-visible': showModal}" id="mask"></div>
  </div>
</template>

<style src="./OrderModal.css" scoped>

