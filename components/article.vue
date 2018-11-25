<template>
  <div>
    <Item
      v-for="(item, index) in arts"
      :item="item"
      :key="index" />
  </div>
</template>

<script>
import Item from './item'

export default {
  components: {
    Item
  },

  computed: {
    arts() {
      return this.$store.state.article.list.arts
    }
  }
}
</script>

