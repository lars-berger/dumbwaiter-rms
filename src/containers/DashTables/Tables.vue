<script>
import TopNav from '@/components/TopNav/TopNav.vue';
import SideNav from '@/components/SideNav/SideNav.vue';
import TablesGrid from '@/components/TablesGrid/TablesGrid.vue';
export default {
  name: 'tables',
  components: {
    TopNav,
    SideNav,
    TablesGrid,
  },
  data: function() {
    return {
      tables: this.$store.state.tables,
    };
  },
  methods: {
    addTable: async function() {
      await this.$store.dispatch('apolloQuery', {
        queryType: 'mutation',
        queryName: 'ADD_TABLE',
        data: {
          number: this.tables.length + 1,
        },
      });
    },
    deleteTable: async function(id) {
      console.log(id);
      await this.$store.dispatch('apolloQuery', {
        queryType: 'mutation',
        queryName: 'DELETE_TABLE',
        data: id,
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

        <TablesGrid />

        <button @click="addTable" class="btn">ADD A TABLE</button>


      </div>
    </div>
  </div>
</template>

<style>
</style>


<style src="./Tables.css" scoped>

