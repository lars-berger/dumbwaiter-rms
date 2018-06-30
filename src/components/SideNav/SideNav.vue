<template functional>
  <div class="sidebar">
    <a href="#">
      <div class="sidebar-hamburger">
        <i class="material-icons">notes</i>
      </div>
    </a>
    <div class="sidebar-content">
      <ul>
        <router-link to="/orders">
          <li :class="{selected: props.page === 'orders'}">
            <i class="material-icons">assignment_late</i>
          </li>
        </router-link>
        <router-link to="/menu">
          <li :class="{selected: props.page === 'menu'}">
            <i class="material-icons">fastfood</i>
          </li>
        </router-link>
        <router-link to="/layout">
          <li :class="{selected: props.page === 'layout'}">
            <i class="material-icons">view_quilt</i>
          </li>
        </router-link>
        <router-link to="/settings">
          <li :class="{selected: props.page === 'settings'}">
            <i class="material-icons">settings</i>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>


<style src="./SideNav.css" scoped>

