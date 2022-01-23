<template>
  <main class="mx-auto max-w-7xl px-4 my-40 sm:px-6 md:my-52 lg:my-72 lg:px-8 xl:mt-28">
    <div class="text-center">
      <object :data='NotFoundSvg' type='image/svg+xml' class='my-3 mx-auto w-2/3 md:w-1/3'></object>
      <h3 class="my-8 text-xl font-semibold">Page not found</h3>

      <h5 class="mt-28 text-base font-normal">Return to <NuxtLink to='/' class='text-blue-600'> home page</NuxtLink></h5>
    </div>

  </main>
</template>

<script>
export default {
  name: 'NotFoundComponent',
  data() {
    return {
      NotFoundSvg: require('~/assets/illustrations/404.svg')
    }
  }
}
</script>
