<script>
import VueDraggableResizable from 'vue-draggable-resizable';

export default {
  components: {
    VueDraggableResizable,
  },
  data: function() {
    return {
      resizing: null,
      tables: this.$store.state.tables,
    };
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

      this.tables = this.$store.state.tables;
    },
    startResizing: function(id) {
      this.resizing = id;
    },
    stopResizing: async function() {
      const child = document.getElementById('resizable');
      const parent = document.getElementById('tables-container');

      const childHeight = Number(child.clientHeight);
      const childWidth = Number(child.clientWidth);
      const parentHeight = Number(parent.clientHeight);
      const parentWidth = Number(parent.clientWidth);

      const height = ((childHeight / parentHeight) * 100).toPrecision(4);
      const width = ((childWidth / parentWidth) * 100).toPrecision(4);

      const childPositionTop = child.style.top.slice(0, -2);
      const childPositionLeft = child.style.left.slice(0, -2);

      const positionTop = ((Number(childPositionTop) / parentHeight) * 100).toPrecision(
        4
      );
      const positionLeft = ((Number(childPositionLeft) / parentWidth) * 100).toPrecision(
        4
      );

      console.log('what im sending', height, width, positionTop, positionLeft);
      await this.$store.dispatch('apolloQuery', {
        queryType: 'mutation',
        queryName: 'UPDATE_TABLE',
        data: {
          id: this.resizing,
          positionX: positionLeft - width,
          positionY: positionTop - height,
          width: width,
          height: height,
        },
      });
      await this.$store.dispatch('apolloQuery', {
        queryType: 'query',
        queryName: 'GET_RESTAURANT_DATA',
      });
      this.resizing = null;
    },
  },
};
window.onclick = event => {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
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
  <div id="tables-container">


    <div @click="showDropdown(`myDropdown${index}`)" v-for="(table, index) in tables" v-if="table.id !== resizing" :key="index" :style="{top: table.positionY + '%', left: table.positionX + '%', width: table.width + '%', height: table.height + '%' }" class="table dropdown dropbtn">
      <button @click="startResizing(table.id)" class="resize-icon">resize</button>
      <p class="table-code">{{table.activeCode}}</p>
      
      <div :id="`myDropdown${index}`" v-if="!table.activeCode" class="dropdown-content">
        <a @click="getToken(table.id)">GET KEY</a>
        <a @click="deleteTable(table.id)">DELETE TABLE</a>
      </div>
    </div>


    <vue-draggable-resizable id="resizable" v-for="(table, index) in tables" v-if="table.id === resizing" :key="index" class="table-resizing" :parent="true"
      :grid="[25,25]">
      <button @click="stopResizing" class="stop-resizing">done</button>
            <p class="table-code">{{table.activeCode}}</p>

    </vue-draggable-resizable>


  </div>
</template>

<style src="./TablesGrid.css">

