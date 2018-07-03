<script>
export default {
  name: 'NewFoodModal',
  props: {
    category: String,
    toggleModal: Function,
    itemInfo: Object,
    item: [String, Object],
    reset: Function,
    // existing data - for edit functionality
  },
  data: function() {
    return {
      foodItem: {
        header: this.item ? 'Edit' : 'New',
        name: this.item ? this.item.name : '',
        description: this.item ? this.item.description : '',
        price: this.item ? this.item.price : '',
        submitButton: this.item ? 'update' : 'add',
      },
      showModal: false,
      priceInputFocused: false,
      fileName: '',
    };
  },
  mounted() {
    this.showModal = true;
    console.log('inside the modal', this.item.name);
  },
  methods: {
    async handleSubmit() {
      const data = {
        name: this.foodItem.name,
        description: this.foodItem.description,
        price: Number(this.foodItem.price),
      };
      if (this.item) {
        console.log('sending an update to the database');
      } else {
        const addedProduct = await this.$store.dispatch(
          'apolloQuery',
          {
            queryName: 'ADD_PRODUCT',
            queryType: 'mutation',
            data: data,
          }
        );

        await this.$store.dispatch('apolloQuery', {
          queryName: 'ADD_CATEGORY_TO_PRODUCT',
          queryType: 'mutation',
          data: {
            id: addedProduct.createProduct.id,
            category: this.category.toLowerCase(),
          },
        });

        this.toggleModal();
      }
    },
    filesAdded(e) {
      const fileName = e.target.value.split('\\');
      this.fileName = fileName[fileName.length - 1];
    },
  },
};
</script>

<template>
  <div class="NewEventModal">
    <div id="modal" :class="{'modal-visible': showModal}">
      <div class="modal-container">
        <i @click="toggleModal" class="material-icons close-modal">close</i>
        <h2>{{foodItem.header}} {{category}} ITEM</h2>
        <hr>
        <form @submit.prevent="handleSubmit" class="modal-form">

          <div class="modal-inputs-container">
            <div class="form-inline">
              <div class="form-field">
                <p class="addnew-label">Name:</p>
                <input v-model="foodItem.name" type="text" :placeholder="foodItem.name"/>
              </div>

              <div class="form-field">
                <p class="addnew-label-price">Price:</p>
                <label :class="{active: priceInputFocused}" for="txt">€
                  <input @focus="priceInputFocused = true" @blur="priceInputFocused = false" v-model="foodItem.price" type="text" id="txt" />
                </label>
              </div>
            </div>

            <div class="form-field">
              <p class="addnew-label">Description:</p>
              <textarea v-model="foodItem.description"></textarea>
            </div>

            <div class="form-field">
              <p class="addnew-label">Photo:</p>
              <div class="file-input">
                  <label for="file-upload" class="custom-file-upload">
                     Upload pictures
                </label>
                <input @change="filesAdded" type="file" id="file-upload" accept="image/*"/>
                  <p class="file-input-text">{{fileName}}</p>
                </div>
                <hr>
            </div>
          </div>

          <div class="form-buttons-wrapper">
            <p id="addnew-error"></p>
            <input type="submit" class="btn addnew-submit" value="ADD ITEM" />
          </div>
        </form>
      </div>
    </div>
    <div @click="toggleModal(); reset()" :class="{'modal-visible': showModal}" id="mask" ></div>
  </div>
</template>
