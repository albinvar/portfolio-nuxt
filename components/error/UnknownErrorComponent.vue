<template>
  <main
    class="mx-auto max-w-7xl px-4 my-36 sm:px-6 md:my-46 lg:my-60 lg:px-8 xl:mt-28"
  >
    <div class="text-center">
      <object
        :data="ErrorSvg"
        type="image/svg+xml"
        class="my-3 mx-auto w-1/2 md:w-1/4"
      ></object>
      <h3 class="my-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
        A {{ error.statusCode }} error occurred
      </h3>

      <h5 class="my-20 text-base font-normal text-gray-700 dark:text-gray-300">
        Return to <NuxtLink to="/" class="text-blue-600"> home page</NuxtLink>
      </h5>
    </div>
  </main>
</template>

<script>
export default {
  name: 'UnknownErrorComponent',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  data() {
    return {
      ErrorSvg: require('~/assets/illustrations/error.svg'),
    }
  },
}
</script>

<style scoped></style>
