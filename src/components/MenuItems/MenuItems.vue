<template>
<div>
  <div v-for="item of menuItems" class="menu-item-card" :key="item.id">
    <div class="menu-item-card-left">
    <div class="menu-item-img-wrapper">
      <img class="menu-item-img" :src="item.photos[0].url">
    </div>
    <div class="menu-item text">
      <h4 class="menu-item-name">{{item.name}} - €{{item.price}}</h4>
      <p class="menu-item description">{{item.description}}</p>
    </div>
    </div>
        <div class="menu-item-card-right">
    <a @click="deleteItem(id)" class="menu-item-button"><i class="material-icons">delete_outline</i></a>
    <a class="menu-item-button" href="#"><i class="material-icons">edit</i></a>
        </div>
  </div>
</div>
</template>


<script>
export default {
  props: {
    menuItems: Array,
    deleteItem: Function,
    editItem: Function,
  },
};
</script>

<style src="./MenuItems.css" scoped>

