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
      openModal: null,
      menuItems: {
        food: this.$store.state.menuItems.food,
        drinks: this.$store.state.menuItems.drinks,
        desserts: this.$store.state.menuItems.desserts,
      },
      editInfo: null,
    };
  },
  methods: {
    resetInfo() {
      this.editInfo = '';
    },
    changeTab(newTab) {
      if (newTab !== this.selectedTab) {
        this.selectedTab = newTab;
      }
    },
    toggleModal(category) {
      this.openModal = this.openModal ? null : category;
    },
    openEditModal(newInfo) {
      const data = {
        name: newInfo.name,
        description: newInfo.description,
        price: newInfo.price,
      };
      this.editInfo = newInfo;
      this.toggleModal(this.selectedTab);
      // this.editInfo = '';
    },
    async deleteItem(product) {
      const test = await this.$store.dispatch(
        'apolloQuery',
        {
          queryType: 'mutation',
          queryName: 'DELETE_PRODUCT',
          data: product.id,
        }
      );
      await this.$store.dispatch('apolloQuery', {
        queryType: 'query',
        queryName: 'GET_RESTAURANT_DATA',
      });
      console.log('deleted', test);
    },
  },
};
</script>

<template>
  <div class="Dashboard">
    <NewFoodModal v-if="openModal" v-bind="{toggleModal}" :item="editInfo" :category="openModal" :reset="resetInfo"/>
    <SideNav page="menu" />

    <div class="dash-container">
      <TopNav />

      <div class="content">
        <h1>MENU</h1>

        <div class="menu-buttons-wrapper">
          <a @click="toggleModal('FOOD')" class="btn menu-add-button" href="#">+ MEAL</a>
          <a @click="toggleModal('DRINKS')" class="btn menu-add-button" href="#">+ DRINK</a>
          <a @click="toggleModal('DESSERTS')" class="btn menu-add-button" href="#">+ DESSERT</a>
        </div>

        <div class="menu-nav">
          <ul class="menu-nav-left">
            <a @click="changeTab('food')" :class="{selected: selectedTab === 'food'}" href="#">
              <li>MEALS</li>
            </a>
            <a @click="changeTab('drinks')" :class="{selected: selectedTab === 'drinks'}" href="#">
              <li>DRINKS</li>
            </a>
            <a @click="changeTab('desserts')" :class="{selected: selectedTab === 'desserts'}" href="#">
              <li>DESSERTS</li>
            </a>
          </ul>
        </div>

        <MenuItems :menuItems="menuItems.food" v-bind="{deleteItem, openEditModal }" v-if="selectedTab === 'food'"
        />
        <MenuItems :menuItems="menuItems.drinks" v-bind="{deleteItem, openEditModal }" v-if="selectedTab === 'drinks'" />
        <MenuItems :menuItems="menuItems.desserts" v-bind="{deleteItem, openEditModal }" v-if="selectedTab === 'desserts'" />

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'Menu.css';
</style>
