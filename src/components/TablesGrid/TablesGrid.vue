<script>
import VueDraggableResizable from 'vue-draggable-resizable';

export default {
  components: {
    VueDraggableResizable,
  },
  data: function() {
    return {
      resizing: null,
      beforeResize: {},
      tables: this.$store.state.tables,
      displayDropdown: false,
    };
  },
  mounted() {
    document.onclick = event => {
      if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
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
      const tableToResize = document.getElementById(id);
      const parent = document.getElementById('tables-container');

      const parentHeight = Number(parent.clientHeight);
      const parentWidth = Number(parent.clientWidth);

      const topToPixels = (tableToResize.style.top.slice(0, -1) * parentHeight) / 100;
      const leftToPixels = (tableToResize.style.left.slice(0, -1) * parentHeight) / 100;

      this.beforeResize = {
        h: tableToResize.clientHeight,
        w: tableToResize.clientWidth,
        y: topToPixels,
        x: leftToPixels,
      };

      this.$nextTick(() => {
        this.resizing = id;
      });
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

      await this.$store.dispatch('apolloQuery', {
        queryType: 'mutation',
        queryName: 'UPDATE_TABLE',
        data: {
          id: this.resizing,
          positionX: positionLeft,
          positionY: positionTop,
          width: width,
          height: height,
        },
      });
      await this.$store.dispatch('apolloQuery', {
        queryType: 'query',
        queryName: 'GET_RESTAURANT_DATA',
      });
      this.tables = this.$store.state.tables;
      this.resizing = null;
    },
    handleTableClick: function(index) {
      // if ()
    },
  },
};
</script>

<template>
  <div id="tables-container">


    <div @click="showDropdown(`myDropdown${index}`)" :id="table.id" v-for="(table, index) in tables" v-if="table.id !== resizing" :key="index" :style="{top: table.positionY + '%', left: table.positionX + '%', width: table.width + '%', height: table.height + '%' }" class="table dropdown">

      <button @click="startResizing(table.id)" class="resize-icon start"><i class="material-icons">zoom_out_map</i></button>

      <p class="table-code">{{table.activeCode}}</p>
        
      
      <div :id="`myDropdown${index}`" v-if="!table.activeCode" class="dropdown-content">
        <a @click="getToken(table.id)">GET KEY</a>
        <a @click="deleteTable(table.id)">DELETE TABLE</a>
      </div>
    </div>


    <vue-draggable-resizable id="resizable" v-for="(table, index) in tables" v-if="table.id === resizing" :key="index" :w="beforeResize.w" :h="beforeResize.h" :x="beforeResize.x" :y="beforeResize.y" :parent="true"
      :grid="[25,25]">
      <button @click="stopResizing" class="resize-icon stop"><i class="material-icons">check</i></button>
            <p class="table-code">{{table.activeCode}}</p>
    </vue-draggable-resizable>


  </div>
</template>

<style src="./TablesGrid.css">

