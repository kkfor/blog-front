<template>
  <div>
    <Article />
    <div class="page">
      <nuxt-link to="/">1</nuxt-link>
      <nuxt-link
        v-for="num in list.pages"
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
.page {
  a {
    padding: 4px;
  }
}
</style>