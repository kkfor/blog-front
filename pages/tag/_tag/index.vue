<template>
  <div>
    <Article :arts="list.arts" />
  </div>
</template>

<script>
import api from "~/api"
import Article from "~/components/article"

export default {
  components: {
    Article
  },

  validate({ params, store }) {
    return params.tag && store.state.tag.list.some(tag => {
      return Object.is(tag.slug, params.tag)
    })
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

<style lang="scss" scoped>
</style>