<template>
  <div>
    <div v-if="error.statusCode === 404">
      <NotFoundComponent />
    </div>
    <div v-else>
      <UnknownErrorComponent :error="error" />
    </div>
  </div>
</template>

<script>
import NotFoundComponent from '~/components/error/NotFoundComponent'
import UnknownErrorComponent from '~/components/error/UnknownErrorComponent'
export default {
  name: 'ErrorLayout',
  components: { UnknownErrorComponent, NotFoundComponent },
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'], // you can set a custom layout for the error page

  head() {
    return {
      title: `Whoops, a ${this.error.statusCode} error `,
    }
  },
}
</script>
