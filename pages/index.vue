<template>
  <div class="list-main">
    <Article :arts="data.arts" />
    <div
      v-if="data.pages>1"
      class="page">
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
  // fetch({ store }) {
  //   store.commit('article/GET_LIST')
  // },
  async asyncData({ params }) {
    const { page = 1 } = params;
    const res = await api.article.getArts({ page })
    return {
      data: res.data
    }
  }
  // computed: {
  //   data() {
  //     return this.$store.state.article.list
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.list-main {
  background: #fff;
  padding: 16px;
}
.page {
  a {
    padding: 4px;
  }
}
</style>
