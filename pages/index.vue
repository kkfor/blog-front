<template>
  <div>
    <Article />
  </div>
</template>

<script>
import api from '~/api'
import Article from '~/components/article'

export default {
  components: {
    Article
  },
  fetch({ store, params }) {
    const { page = 1 } = params
    return store.dispatch('article/getList', { page })
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
