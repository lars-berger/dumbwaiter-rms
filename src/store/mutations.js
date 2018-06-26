// mutations are synchronous - often used to set the data from an action

export default {
  SET_MENU (state, menu) {
    state.menuItems = menu;
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
}