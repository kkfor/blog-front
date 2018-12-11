<template>
  <div class="item">
    <h3><nuxt-link :to="`/article/${item._id}`">{{ item.title }}</nuxt-link></h3>
    <div class="description">{{ item.content | text(128) }}</div>
    <div class="meta">
      <span>{{ item.createdAt | date('yyyy-MM-dd') }}</span>
      <span>浏览 {{ item.meta.views }}</span>
      <span>评论 {{ item.meta.comments }}</span>
      <span v-if="!!item.category.length">分类 {{ item.category.map(sub => sub.slug ).join(',') }}</span>
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
    white-space: normal;
    word-break: break-all;
  }
  .meta {
    font-size: 12px;
    color: #555;
    span {
      margin-right: 8px;
    }
  }
}
</style>
