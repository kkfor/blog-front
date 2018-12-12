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

  fetch({ store, params, error }) {
    const { page = 1 } = params
    return store.dispatch('article/getList', { page }).catch(err => {
      error({})
    })
  }

}
</script>

<style lang="scss" scoped>

</style>