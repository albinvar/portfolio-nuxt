<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 dark:text-gray-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
              width="52"
              height="24"
            ></rect>
          </svg>
          <span class="relative text-gray-700 dark:text-gray-100"
            >Github Followers</span
          >
        </span>
      </h2>
      <p class="text-base text-gray-700 dark:text-gray-200 md:text-lg">
        I am so happy for the help and love that i get from my supporters. Much
        gratitude to all of you for being such a great support. Happy on hitting
        <strong>{{ followers == null ? 0 : followers.length }}</strong>
        followers at github.
      </p>
    </div>
    <div class="mx-6 md:mx-auto lg:mx-auto">
      <div
        v-if="$fetchState.pending"
        class="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3"
      >
        <div v-for="index in 9" :key="index" class="flex">
          <span
            alt="team"
            class="animate-pulse w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          >
          </span>
          <div class="flex flex-col justify-center flex-grow">
            <div
              class="my-4 animate-pulse space-y-6 h-6 rounded bg-gray-200 w-3/6 title-font font-medium"
            ></div>
            <div
              class="animate-pulse space-y-4 h-4 rounded bg-gray-200 w-5/6 title-font font-medium"
            ></div>
          </div>
        </div>
      </div>

      <p v-else-if="$fetchState.error">An error occurred :(</p>

      <div
        v-else
        class="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="follower in followers"
          :key="follower.id"
          class="flex"
          data-aos="fade-right"
        >
          <a :href="follower.html_url" target="_blank">
            <img
              class="object-cover w-20 h-20 mr-4 rounded-full shadow"
              :src="follower.avatar_url"
              :alt="follower.login"
            />
          </a>
          <div class="flex flex-col justify-center">
            <a :href="follower.html_url" target="_blank">
              <p class="text-md text-gray-700 dark:text-gray-300 font-bold">
                @{{ follower.login }}
              </p>
            </a>
            <p class="text-sm text-gray-800"></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  <div>-->
  <!--    <p v-if="$fetchState.pending">Fetching mountains...</p>-->
  <!--    <p v-else-if="$fetchState.error">An error occurred :(</p>-->
  <!--    <div v-else>-->
  <!--      <h1>Nuxt Mountains</h1>-->
  <!--      <ul>-->
  <!--        <li v-for="mountain of mountains">{{ mountain.title }}</li>-->
  <!--      </ul>-->
  <!--      <button @click="$fetch">Refresh</button>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: 'FollowersPage',
  title: 'Followers | Albin Varghese',
  components: {},
  props: [],

  data() {
    return {
      followers: [],
      errors: null,
    }
  },

  async fetch() {
    this.followers = await fetch(
      'https://api.github.com/users/albinvar/followers?per_page=100'
    ).then((res) => res.json())
  },
  head() {
    return {
      title: 'Followers | Albin Varghese',
    }
  },
  // mounted() {
  //   // Simple GET request using fetch
  //   fetch("https://api.github.com/users/albinvar/followers")
  //     .then(response => response.json())
  //     .then(data => (this.followers = data)
  //       .catch(err => this.errors = err));
  // }
}
</script>

<style>
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
