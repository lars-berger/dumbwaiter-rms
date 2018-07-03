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
    addTable: async function() {
      await this.$store.dispatch('apolloQuery', {
        queryType: 'mutation',
        queryName: 'ADD_TABLE',
        data: {
          number: this.tables.length + 1,
        },
      });
    },
    showDropdown: id => {
      document.getElementById(id).classList.toggle('show');
    },
    getToken: () => {
      console.log('getting a token');
    },
    deleteTable: () => {},
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

        <div class="tables-container ">
          <div @click="showDropdown(`myDropdown${index}`)" class="table dropdown dropbtn" v-for="(table, index) in tables" :key="index">
<p>
Table Number: {{index}}
</p>
              <div :id="`myDropdown${index}`" class="dropdown-content">
                <a @click ="getToken">get key from Marlon</a>
                <a @click ="deleteTable">delete table</a>

              </div>


          </div>

        </div>

        <button @click="addTable" class="btn">ADD A TABLE</button>


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
