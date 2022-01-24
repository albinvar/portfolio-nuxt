<template>
  <ol
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
    class='flex flex-row flex-nowrap text-sm'
  >
    <li property="itemListElement" typeof="ListItem" class='text-gray-700 dark:text-gray-300'>
      <NLink property="item" typeof="WebPage" to="/">
        <span property="name">albinvar.in</span>
      </NLink>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
      class="text-gray-700 dark:text-gray-300"
    >
      <span class="mx-2 text-md text-blue-500 dark:text-blue-800">/</span>

      <NLink property="item" typeof="WebPage" :to="crumb.path">
        <span class="text-md" property="name">{{
            $route.fullPath === crumb.path && title !== null ? title : crumb.title
          }}</span>
      </NLink>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: param.replace(/-/g, ' '),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>

