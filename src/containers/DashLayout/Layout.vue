<script>
  import api from '@/api';
  import TopNav from '@/components/TopNav/TopNav.vue';
  import SideNav from '@/components/SideNav/SideNav.vue';
  export default {
    name: 'Layout',
    props: {},
    components: {
      TopNav,
      SideNav,
    },
    data: function () {
      return {
        grid: {
          rows: Array(40),
          squares: Array(40).fill('unselected'),
        },
      };
    },
    methods: {
      handleClick(x, y) {
        this.grid.squares[y] = 'selected';
        console.log('fffff', x, y);
        this.$nextTick(console.log(this.grid.squares))
        // if (square.class === unselected) this square = selected;
      },
    },
  };
</script>

<template>
  <div class="Dashboard">
    <SideNav page="layout" />

    <div class="dash-container">
      <TopNav />

      <div class="content">
        <h1>RESTAURANT LAYOUT</h1>

        <div v-for="(row, index) in grid.rows" :key="index" class="row">
          <div v-for="(row, index2) in grid.squares" :key="index2" class="square-wrapper">
            <div @click="handleClick(index2, index)" :class="row"></div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<style src="./Layout.css" scoped>