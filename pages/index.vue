<template>
  <div class="list-main">
    <Article />
    <div
      v-if="list.pages>1"
      class="page">
      <nuxt-link to="/">1</nuxt-link>
      <nuxt-link
        v-for="num in list.pages"
        v-if="num!=1"
        :key="num"
        :to="`/page/${num}`"
      >{{ num }}</nuxt-link>
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
