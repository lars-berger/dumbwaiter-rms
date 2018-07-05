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

        <div class="divider" />
        <div class="flex-container">
          <TablesGrid />
          <div class="right-container">
            <button @click="addTable" class="btn btn-addtable">ADD A TABLE</button>
          </div>

        </div>



      </div>
    </div>
  </div>
</template>

<style>
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #2980b9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>


<style src="./Tables.css" scoped>

