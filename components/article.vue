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
  props: {
    arts: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

