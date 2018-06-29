<template>
  <div class="menu-item-card">
    <div class="menu-item-card-left">
    <div class="menu-item-img-wrapper">
      <img class="menu-item-img" :src="photos">
    </div>
    <div class="menu-item text">
      <h4 class="menu-item-name">{{name}} - €{{price}}</h4>
      <p class="menu-item description">{{description}}</p>
    </div>
    </div>
        <div class="menu-item-card-right">
    <a @click="deleteItem(id)" class="menu-item-button"><i class="material-icons">delete_outline</i></a>
    <a class="menu-item-button" href="#"><i class="material-icons">edit</i></a>
        </div>
  </div>
</template>


<script>
export default {
  props: {
    name: String,
    id: Number,
    description: String,
    photos: String,
    price: Number,
    deleteItem: Function,
    editItem: Function,
  },
};
</script>

<style src="./MenuItems.css" scoped>

