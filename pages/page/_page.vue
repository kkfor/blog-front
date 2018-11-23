<template>
  <div>
    <Article :arts="data.arts" />
    <div class="page">
      <nuxt-link to="/">1</nuxt-link>
      <nuxt-link
        v-for="num in data.pages"
        v-if="num!=1"
        :key="num"
        :to="`/page/${num}`">{{ num }}</nuxt-link>
    </div>
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
.page {
  a {
    padding: 4px;
  }
}
</style>