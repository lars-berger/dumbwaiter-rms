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
      await this.$store.dispatch('apolloQuery', {
        queryType: 'query',
        queryName: 'GET_RESTAURANT_DATA',
      });
      this.tables = this.$store.state.tables;
    },
    deleteTable: async function(id) {
      await this.$store.dispatch('apolloQuery', {
        queryType: 'mutation',
        queryName: 'DELETE_TABLE',
        data: id,
      });
      await this.$store.dispatch('apolloQuery', {
        queryType: 'query',
        queryName: 'GET_RESTAURANT_DATA',
      });
      this.tables = this.$store.state.tables;
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

        <div class="flex-container">
          <TablesGrid />
          <div class="right-container">
            <button @click="addTable" class="btn">ADD A TABLE</button>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<style>
</style>


<style src="./Tables.css" scoped>

