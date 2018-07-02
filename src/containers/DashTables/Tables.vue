<script>
  import TopNav from '@/components/TopNav/TopNav.vue';
  import SideNav from '@/components/SideNav/SideNav.vue';
  import VueDraggableResizable from 'vue-draggable-resizable'

  export default {
    name: 'tables',
    components: {
      TopNav,
      SideNav,
      VueDraggableResizable,
    },
    data: function () {
      return {
        tables: this.$store.state.tables,
      };
    },
    methods: {
      addTable: async function () {
        await this.$store.dispatch('apolloQuery', {
          queryType: 'mutation',
          queryName: 'ADD_TABLE',
          data: {
            number: this.tables.length + 1,
          },
        });
      },
      deleteTable: async function (id) {
        console.log(id);
        await this.$store.dispatch('apolloQuery', {
          queryType: 'mutation',
          queryName: 'DELETE_TABLE',
          data: id,
        });
      },
      showDropdown: id => {
        document.getElementById(id).classList.toggle('show');
      },
      getToken: () => {
        console.log('getting a token');
      },
    },
  };
  window.onclick = event => {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName(
        'dropdown-content'
      );
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
</script>

<template>
  <div class="Dashboard">
    <SideNav page="tables" />

    <div class="dash-container">
      <TopNav />

      <div class="content">
        <h1 class="orders-h1">TABLES</h1>

        <div class="parent">
          <vue-draggable-resizable :parent="true" :grid="[25,25]">
            <p>You can snap me on a grid.</p>
          </vue-draggable-resizable>
        </div>
        <div class="tables-container">
          <div @click="showDropdown(`myDropdown${index}`)" class="table dropdown dropbtn" v-for="(table, index) in tables" :key="index">
            <div :id="`myDropdown${index}`" class="dropdown-content">
              <a @click="getToken(table.id)">get key from Marlon</a>
              <a @click="deleteTable(table.id)">delete table</a>
            </div>

          </div>
        </div>

        <button @click="addTable" class="btn">ADD A TABLE</button>


      </div>
    </div>
  </div>
</template>

<style>
</style>


<style src="./Tables.css" scoped>