export const state = () => ({
  navbarStatus: false,
  navbarItems: [
    { link: '/', name: 'Home', isMain: false },
    { link: '/resume', name: 'Resume', isMain: false },
    { link: '/blog', name: 'Blog', isMain: false },
    { link: '/followers', name: 'Followers', isMain: false },
    { link: '/contact', name: 'Contact', isMain: true },
  ],
})

export const mutations = {
  showNavbar(state) {
    state.navbarStatus = true
  },
  hideNavbar(state) {
    state.navbarStatus = false
  },
}
