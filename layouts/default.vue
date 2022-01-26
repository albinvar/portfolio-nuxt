<template>
  <div class="relative min-h-screen bg-white dark:bg-gray-800">
    <div class="mx-auto">
      <div
        class="relative z-10 pb-4 bg-white dark:bg-gray-900 sm:pb-16 md:pb-6 lg:w-full shadow-lg rounded-b-3xl animate__animated animate__slideInDown"
      >
        <div>
          <div class="relative pt-4 px-4 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div class="flex items-center flex-grow flex-shrink-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <NuxtLink to="/">
                    <span class="sr-only">Workflow</span>
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="/workflow.svg"
                      alt="logo"
                      height="2.5rem"
                      width="2.5rem"
                    />
                  </NuxtLink>
                  <span
                    class="lg:pl-4 text-xl text-gray-500 dark:text-gray-200 font-bold"
                    >Albin Varghese</span
                  >

                  <div class="-mr-2 flex items-center md:hidden">
                    <ColorModePicker class="block md:hidden mr-6" />

                    <button
                      type="button"
                      class="bg-white dark:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      aria-expanded="false"
                      @click="
                        () => {
                          showNavbar()
                        }
                      "
                    >
                      <span class="sr-only">Open main menu</span>
                      <!-- Heroicon name: outline/menu -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                v-for="item in navbarItems"
                :key="item.id"
                class="hidden md:block md:ml-10 md:pr-4 md:space-x-8 lg:block lg:ml-10 lg:pr-4 lg:space-x-8"
              >
                <NuxtLink
                  :to="item.link"
                  class="font-medium text-gray-500 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-500"
                  :class="{
                    'text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-500':
                      item.isMain,
                  }"
                  >{{ item.name }}</NuxtLink
                >
              </div>

              <ColorModePicker class="hidden md:block ml-4" />
            </nav>
          </div>
          <transition
            name="fade"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <NavbarComponent v-if="navbarStatus" />
          </transition>
        </div>
      </div>
    </div>
    <Nuxt />
    <FooterComponent />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import FooterComponent from '~/components/FooterComponent'

export default {
  name: 'App',
  components: { FooterComponent },
  data() {
    return {
      // navbarStatus: this.$store.state.navbarStatus,
    }
  },

  computed: {
    ...mapState(['navbarStatus', 'navbarItems']),
  },

  methods: {
    ...mapMutations(['showNavbar']),
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
