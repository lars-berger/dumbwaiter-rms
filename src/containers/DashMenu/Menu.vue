<script>
import api from '@/api';
import TopNav from '@/components/TopNav/TopNav.vue';
import SideNav from '@/components/SideNav/SideNav.vue';
import MenuItems from '@/components/MenuItems/MenuItems.vue';
import NewFoodModal from '@/components/NewFoodModal/NewFoodModal.vue';
export default {
  name: 'Login',
  props: {},
  components: {
    TopNav,
    SideNav,
    MenuItems,
    NewFoodModal,
  },
  data: function() {
    return {
      selectedTab: 'food',
      modalVisible: false,
      menuItems: {
        food: this.$store.state.menuItems.food,
        drinks: this.$store.state.menuItems.drinks,
        desserts: this.$store.state.menuItems.desserts,
      },
    };
  },
  methods: {
    changeTab(newTab) {
      if (newTab !== this.selectedTab) {
        this.selectedTab = newTab;
      }
    },
    toggleModal() {
      this.modalVisible = this.modalVisible ? false : true;
    },
    deleteItem(idToDelete) {
      api
        .request('PUT', '/delete', { id: idToDelete })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
    editItem(newInfo) {
      const data = {
        name: newInfo.name,
        description: newInfo.description,
        price: newInfo.price,
      };

      api
        .request('PUT', '/edit', data)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<template>
  <div class="Dashboard">
    <NewFoodModal v-if="modalVisible" v-bind="{toggleModal}" />
    <SideNav page="menu" />

    <div class="dash-container">
      <TopNav />

      <div class="content">
        <h1>MENU</h1>

        <div class="menu-buttons-wrapper">
          <a @click="toggleModal" class="btn menu-add-button" href="#">+ FOOD</a>
          <a class="btn menu-add-button" href="#">+ DRINK</a>
          <a class="btn menu-add-button" href="#">+ DESSERT</a>
        </div>

        <div class="menu-nav">
          <ul class="menu-nav-left">
            <a @click="changeTab('food')" :class="{selected: selectedTab === 'food'}" href="#">
              <li>FOOD</li>
            </a>
            <a @click="changeTab('drinks')" :class="{selected: selectedTab === 'drinks'}" href="#">
              <li>DRINKS</li>
            </a>
            <a @click="changeTab('desserts')" :class="{selected: selectedTab === 'desserts'}" href="#">
              <li>DESSERTS</li>
            </a>
          </ul>
        </div>

        <MenuItems v-for="item of menuItems.food" :key="item.id" :name="item.name" :id="item.id" v-bind="{deleteItem, editItem}" v-if="selectedTab === 'food'"
        />
        <MenuItems v-for="item of menuItems.drinks" :key="item.id" :name="item.name" :id="item.id" v-bind="{deleteItem, editItem}" v-if="selectedTab === 'drinks'" />
        <MenuItems v-for="item of menuItems.desserts" :key="item.id" :name="item.name" :id="item.id" v-bind="{deleteItem, editItem}" v-if="selectedTab === 'desserts'" />

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'Menu.css';
</style>
