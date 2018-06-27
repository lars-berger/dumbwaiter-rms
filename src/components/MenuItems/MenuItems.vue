<template>
  <div class="menu-item-card">
    <div class="menu-item-img-wrapper">
      <img class="menu-item-img" src="@/assets/images/burger.png">
    </div>
    <div class="menu-item text">
      <h4 class="menu-item-name">{{name}}</h4>
      <p class="menu-item description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
    <a @click="deleteItem(id)" class="menu-item-button"><i class="material-icons">delete</i></a>
    <a class="menu-item-button" href="#"><i class="material-icons">edit</i></a>
  </div>
</template>


<script>
export default {
  props: {
    name: String,
    id: Number,
    deleteItem: Function,
    editItem: Function,
  }
}
</script>
