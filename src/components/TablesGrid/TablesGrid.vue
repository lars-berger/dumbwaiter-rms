<script>
import VueDraggableResizable from 'vue-draggable-resizable';

export default {
  components: {
    VueDraggableResizable,
  },
  data: function() {
    return {};
  },
  computed: {
    tables() {
      return this.$store.state.tables;
    },
  },
  methods: {
    showDropdown: id => {
      document.getElementById(id).classList.toggle('show');
    },
    getToken: async function(id) {
      await this.$store.dispatch('apolloQuery', {
        queryType: 'mutation',
        queryName: 'CONNECT_TABLE',
        data: id,
      });
      await this.$store.dispatch('apolloQuery', {
        queryType: 'query',
        queryName: 'GET_RESTAURANT_DATA',
      });
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
  <div class="tables-container">


    <div @click="showDropdown(`myDropdown${index}`)" v-for="(table, index) in tables" v-if="table.resizable" :key="index" class="table dropdown dropbtn">
      <p class="table-code">{{table.activeCode}}</p>
      
      <div :id="`myDropdown${index}`" v-if="!table.activeCode" class="dropdown-content">
        <a @click="getToken(table.id)">GET KEY</a>
        <a @click="deleteTable(table.id)">DELETE TABLE</a>
      </div>
    </div>


    <vue-draggable-resizable v-for="(table, index) in tables" v-if="!table.resizable" :key="index" class="table-resizing" :parent="true"
      :grid="[25,25]" />

    <br>
    <br>
  </div>
</template>

<style src="./TablesGrid.css">

