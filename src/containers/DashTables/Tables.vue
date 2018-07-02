<script>
import TopNav from '@/components/TopNav/TopNav.vue';
import SideNav from '@/components/SideNav/SideNav.vue';
export default {
  name: 'tables',
  components: {
    TopNav,
    SideNav,
  },
  data: function() {
    return {
      tables: this.$store.state.tables,
    };
  },
  methods: {
    addTable: function() {
      this.tables.push({
        number: this.tables.length + 1,
      });
    },
  },
};
</script>

<template>
 <div class="Dashboard">
    <SideNav page="tables" />

    <div class="dash-container">
      <TopNav />

      <div class="content">
        <h1 class="orders-h1">TABLES</h1>

        <div v-for="(table, index) in tables" :key="index">
          <p>foidsafoids</p>
        </div>

          <button @click="addTable"></button>


      </div>
    </div>
  </div>
  </template>

<style>
</style>


<style>
</style>
