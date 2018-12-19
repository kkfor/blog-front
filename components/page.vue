<template>
  <div
    v-if="list.pages>1"
    class="page"
  >
    <nuxt-link to="/">1</nuxt-link>
    <nuxt-link
      v-for="num in list.pages"
      v-if="num!=1"
      :key="num"
      :to="`/page/${num}`"
    >{{ num }}</nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.article.list
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  a {
    padding: 4px;
  }
}
</style>
