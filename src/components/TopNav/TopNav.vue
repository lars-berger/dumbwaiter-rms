<script>
export default {
  name: 'TopNav',
  props: {},
  components: {},
  data: function() {
    return {
      restaurantName: this.$store.state.restaurantInfo.name,
    };
  },
  mounted() {},
  methods: {},
};
</script>
<template>
  <div class="navbar">
    <ul class="navbar-right">
      <li>
        <img src="@/assets/images/temp-logo4.svg" class="logo-img">
      </li>
      <li>
        <a href="#">
          <i class="material-icons">notifications</i>
        </a>
      </li>
      <li class="navbar-name">{{restaurantName}}</li>
      <li>
        <a href="#">
          <i class="material-icons dropdown-icon">arrow_drop_down</i>
        </a>
      </li>
    </ul>
  </div>
</template>


<style src="./TopNav.css" scoped>

