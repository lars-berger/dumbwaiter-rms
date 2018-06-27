<template functional>
  <div class="sidebar">
    <a href="#">
      <div class="sidebar-hamburger">
        <i class="material-icons">notes</i>
      </div>
    </a>
    <div class="sidebar-content">
      <ul>
        <a href="/orders">
          <li :class="{selected: props.page === 'orders'}">
            <i class="material-icons">assignment_late</i>
          </li>
        </a>
        <a href="/menu">
          <li :class="{selected: props.page === 'menu'}">
            <i class="material-icons">fastfood</i>
          </li>
        </a>
        <a href="/tables">
          <li :class="{selected: props.page === 'tables'}">
            <i class="material-icons">view_quilt</i>
          </li>
        </a>
        <a href="/settings">
          <li :class="{selected: props.page === 'settings'}">
            <i class="material-icons">settings</i>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>
