<template>
  <div>
    <Article :arts="data.arts" />
    <nuxt-link to="/">1</nuxt-link>
    <nuxt-link to="/page/2">2</nuxt-link>
  </div>
</template>

<script>
import api from "~/api"
import Article from "~/components/article"

export default {
  components: {
    Article
  },
  async asyncData({ params }) {
    const { page = 1 } = params
    const res = await api.article.getArts({ page })
    return {
      data: res.data
    }
  }
}
</script>

<style lang="scss" scoped>
</style>