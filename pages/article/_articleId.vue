<template>
  <div class="left-content">
    <section class="article">
      <h1 class="title">{{ item.title }}</h1>
      <div class="meta">
        <span>fdfd</span>
        <span>作者</span>
      </div>
      <div
        class="content"
        v-html="item.content"
      />
    </section>
    <Comment :id="item._id" />
  </div>
</template>

<script>
import api from '~/api'
import Comment from '~/components/comment'

export default {
  components: {
    Comment
  },

  fetch({ store, params }) {
    const id = params.articleId
    return store.dispatch('article/getItem', id)
  },

  computed: {
    item() {
      return this.$store.state.article.item
    }
  }

}
</script>

<style lang="scss" scoped>
.left-content {
  section {
    padding: 16px;
    margin-bottom: 16px;
    background: #fff;
  }
  .article {
    .title {
      font-size: 22px;
    }
    .meta {
      margin: 8px 0;
      color: #555;
    }
    .content {
      line-height: 1.8;
    }
  }
  
}
</style>
