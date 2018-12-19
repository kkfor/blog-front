<template>
  <div class="article-list">
    <div>
      <Item
        v-for="(item, index) in list.data"
        :item="item"
        :key="index" />
    </div>
    <Page :list="list"/>
  </div>
</template>

<script>
import Item from './item'
import Page from './page'

export default {
  components: {
    Item,
    Page
  },

  computed: {
    list() {
      return this.$store.state.article.list
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  padding: 16px;
  background: #fff;
}
</style>
