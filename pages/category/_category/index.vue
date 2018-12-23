<template>
  <div>
    <Article :arts="list.arts" />
  </div>
</template>

<script>
import Article from '~/components/article'

export default {
  components: {
    Article
  },

  validate({ params, store }) {
    return (
      params.category &&
      store.state.category.list.some(category => {
        return Object.is(category.slug, params.category)
      })
    )
  },

  head() {
    const { category } = this.$route.params
    const item = this.$store.state.category.list.find(
      item => item.slug === category
    )
    return {
      title: item.name,
      titleTemplate: '%s-kkfor前端技术分享博客'
    }
  },

  fetch({ store, params }) {
    return store.dispatch('article/getList', params)
  },

  computed: {
    list() {
      return this.$store.state.article.list
    }
  }
}
</script>
