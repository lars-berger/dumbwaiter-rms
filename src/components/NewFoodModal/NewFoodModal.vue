<template>
  <div class="NewEventModal">
    <div id="modal" :class="{'modal-visible': showModal}">
      <div class="modal-container">
        <h3 class="login-header">NEW FOOD ITEM</h3>
        <form @submit.prevent="handleSubmit" class="modal-form">
          <p id="addnew-error"></p>

            <div class="form-field">
              <p class="addnew-label">Name:</p>
              <input v-model="foodItem.name" type="text" />
            </div>

            <div class="form-field">
              <p class="addnew-label">Description:</p>
              <input v-model="foodItem.description" type="text" />
            </div>

            <div class="form-field">
              <p class="addnew-label">Price:</p>
              <input v-model="foodItem.price" type="text" />
            </div>

          <div class="form-buttons-wrapper">
            <input type="submit" class="btn addnew-submit" value="Confirm" />
            <span @click="toggleModal" class="addnew-cancel">CANCEL</span>
          </div>
        </form>
      </div>
    </div>
    <div @click="toggleModal" :class="{'modal-visible': showModal}" id="mask"></div>
  </div>
</template>


<script>
export default {
  name: 'NewFoodModal',
  props: {
    toggleModal: Function,
    // existing data - for edit functionality
  },
  data: function() {
    return {
      foodItem: {
        name: '',
        description: '',
        price: '',
      },
      showModal: false,
    };
  },
  mounted() {
    this.showModal = true;
  },
  methods: {
    handleSubmit() {
      fetch('http://example.com/new-food', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(
            'token'
          )}`,
        },
        body: JSON.stringify({
          name: this.foodItem.name,
          description: this.foodItem.description,
          price: this.foodItem.price,
        }),
      })
        .then(res => res.json())
        .then(() => {
          this.toggleModal();
        })
        .catch(err => console.log(err));
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
