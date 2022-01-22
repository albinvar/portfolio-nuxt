export const state = () => ({
  navbarStatus: false
})


export const mutations = {
  showNavbar(state){
    state.navbarStatus = true
  },
  hideNavbar(state) {
    state.navbarStatus = false
  }
}
