<template>
  <div
    class="h-screen absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    @click.self="
      () => {
        hideNavbar()
      }
    "
  >
    <div
      class="rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div class="px-5 pt-4 flex items-center justify-between">
        <div>
          <NuxtLink
            to="/"
            @click.native="
              () => {
                hideNavbar()
              }
            "
          >
            <img
              class="h-8 w-auto"
              src="/workflow.svg"
              alt="logo"
              height="2.5rem"
              width="2.5rem"
            />
          </NuxtLink>
        </div>
        <div class="-mr-2">
          <button
            type="button"
            class="bg-white dark:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            @click="
              () => {
                hideNavbar()
              }
            "
          >
            <span class="sr-only">Close main menu</span>
            <!-- Heroicon name: outline/x -->
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-for="item in navbarItems"
        :key="item.id"
        class="px-2 pt-2 pb-3 space-y-1"
      >
        <NuxtLink
          :to="item.link"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-gray-200 dark:hover:bg-gray-600"
          :class="{
            'w-full px-5 py-3 text-center font-medium text-indigo-600 dark:text-indigo-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-200':
              item.isMain,
          }"
          @click.native="
            () => {
              hideNavbar()
            }
          "
          >{{ item.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'NavbarComponent',

  computed: {
    ...mapState(['navbarItems']),
  },

  methods: {
    ...mapMutations(['hideNavbar']),
  },
}
</script>
