<template>
  <div>
    <Article />
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