<template>
  <div class="item">
    <h3><nuxt-link :to="`/article/${item._id}`">{{ item.title }}</nuxt-link></h3>
    <div class="description">{{ item.content }}</div>
    <div class="meta">
      <span>{{ item.createdAt }}</span>
      <span>admin</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .item {
    border-bottom: 1px dashed #ccc;
    padding-bottom: 16px;
    margin-bottom: 16px;
    h3 {
      font-size: 18px;
    }
    .description {
      line-height: 1.6;
      padding: 12px 0;
    }
    .meta {
      color: #555;
      span {
        margin-right: 16px;
      }
    }
  }
</style>
