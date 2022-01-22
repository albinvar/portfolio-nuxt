<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white h-screen">
    <div class="mx-auto">
      <div class="relative z-10 pb-4 bg-white sm:pb-16 md:pb-6 lg:w-full shadow-lg rounded-b-3xl animate__animated animate__slideInDown">
        <svg class="hidden lg:block absolute h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div>
          <div class="relative pt-4 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <NuxtLink to="/">
                    <span class="sr-only">Workflow</span>
                    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt='logo'>
                  </NuxtLink>
                  <span class="lg:pl-4 text-xl text-gray-500 font-bold animate__animated animate__jackInTheBox animate__delay-1s">Albin Varghese</span>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                    type="button"  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="() => {
                showNavbar()
              }" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <!-- Heroicon name: outline/menu -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div v-for="item in items" :key="item.id" class="hidden md:block md:ml-10 md:pr-4 md:space-x-8 lg:block lg:ml-10 lg:pr-4 lg:space-x-8">
                <NuxtLink :to="item.link" class="font-medium text-gray-500 hover:text-gray-900" :class="{ 'text-indigo-600 hover:text-indigo-500': item.isMain }">{{ item.name }}</NuxtLink>
              </div>
            </nav>
          </div>

          <!--
            Mobile menu, show/hide based on menu open state.
            Entering: "duration-150 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
          -->
          <transition v-if='navbarStatus' name="fade" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <NavbarComponent :items="items"/>
          </transition>
        </div>

      </div>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  name: 'App',
  data() {
    return {
      // navbarStatus: this.$store.state.navbarStatus,
      items: [
        { link: '/', name: "Home", isMain: false },
        { link: '/resume', name: "Resume", isMain: false },
        { link: '/blog', name: "Blog", isMain: false },
        { link: '/followers', name: "Followers", isMain: false },
        { link: '/contact', name: "Contact", isMain: true },
      ]
    }
  },

  computed: {
    ...mapState([
      'navbarStatus'
    ])
  },

  methods: {
    ...mapMutations([
      'showNavbar',
    ])
  }
}
</script>
