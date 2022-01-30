<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div
      v-if="$fetchState.pending"
      class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
    >
      <div
        v-for="index in 9"
        :key="index"
        class="p-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-sm"
      >
        <h3
          class="mx-8 h-6 my-3 animate-pulse space-y-4 h-4 rounded bg-gray-300 dark:bg-gray-600"
        ></h3>
        <p
          class="h-3 my-1 animate-pulse space-y-4 h-4 rounded bg-gray-300 dark:bg-gray-600"
        ></p>
        <p
          class="h-3 my-4 animate-pulse space-y-4 h-4 rounded bg-gray-300 dark:bg-gray-600"
        ></p>
        <div class="flex items-center">
          <span
            class="h-3 my-1 mx-4 animate-pulse space-y-4 h-4 rounded bg-gray-300 dark:bg-gray-600 object-cover w-10 h-10 rounded-full shadow-sm"
          ></span>
          <div>
            <a
              aria-label="Author"
              title="Author"
              class="h-3 my-1 mx-3 px-14 animate-pulse space-y-4 h-4 rounded bg-gray-300 dark:bg-gray-600"
            ></a>
            <p
              class="h-3 my-1 mx-4 px-8 animate-pulse space-y-4 h-4 rounded bg-gray-300 dark:bg-gray-600"
            ></p>
          </div>
        </div>
      </div>
    </div>

    <p v-else-if="$fetchState.error">An error occurred :(</p>

    <div
      v-else
      class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
    >
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-sm"
      >
        <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            class="transition-colors duration-200 text-purple-600 hover:text-purple-800"
            aria-label="Category"
            >weekend</a
          >
          <span class="text-gray-600 dark:text-gray-400"> — 1 Jan 2022</span>
        </p>
        <a
          aria-label="Article"
          title="Jingle Bells"
          class="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 text-gray-900 dark:text-gray-200 hover:text-purple-400 dark:hover:text-purple-500"
          >{{ post.title }}</a
        >
        <p class="mb-5 text-gray-700 dark:text-gray-300">
          {{ post.description }}
        </p>
        <div class="flex items-center">
          <a aria-label="Author" title="Author" class="mr-3">
            <img
              src="~/assets/images/me.webp"
              alt="avatar"
              class="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              aria-label="Author"
              title="Author"
              class="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-200 hover:text-purple-400 dark:hover:text-purple-600"
              >Albin Varghese</a
            >
            <p
              class="text-sm font-medium leading-4 text-gray-600 dark:text-gray-400"
            >
              Author
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      posts: [],
    }
  },

  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },

  head() {
    return {
      title: 'Followers | Albin Varghese',
    }
  },
}
</script>

<style scoped></style>
