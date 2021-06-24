import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarToggle: false,
    dashboardDropdownOpen: false,
    paymentsDropdownOpen: false,
  },
  mutations: {
    sidebarToggleMutation(state) {
      return state.sidebarToggle = !state.sidebarToggle
    },
    dashboardDropdownMutation(state, payload) {
      return state.dashboardDropdownOpen = payload.status
    },
    paymentsDropdownMutation(state, payload) {
      return state.paymentsDropdownOpen = payload.status
    },
  },
  actions: {
    sidebarToggleAction(context) {
      context.commit('sidebarToggleMutation')
    },
    dashboardDropdownAction(context, payload) {
      context.commit('dashboardDropdownMutation', payload);
    },
    paymentsDropdownAction(context, payload) {
      context.commit('paymentsDropdownMutation', payload);
    },
  },
  modules: {
  }
})
